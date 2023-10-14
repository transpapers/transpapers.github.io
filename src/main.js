import {PDFDocument, PDFTextField, PDFCheckBox, PDFRadioGroup} from 'pdf-lib';
import {render} from 'nunjucks';
import html2pdf from 'html2pdf.js';

import {michiganNameChange} from './process';
import {numericalAge} from './util';
import countyInfo from './countyInfo.json';

/**
 * Fill a PDF `doc`ument with the given `data` based on the formfill data in `fills`.
 * @param {PDFDocument} doc
 * @param {Formfill[]} fills
 * @param {Person} data
 * @return {PDFDocument} Filled PDF document
 */
function fillForm(doc, fills, data) {
	const form = doc.getForm();
	const pages = doc.getPages();

	for (const fill of fills) {
		if (fill.field !== undefined) {
			const field = form.getField(fill.field);
			if (fill.text !== undefined && field instanceof PDFTextField) {
				const text = fill.text(data);
				field.setText(text);
			} else if (fill.check !== undefined && field instanceof PDFCheckBox) {
				const checked = fill.check(data);
				if (checked) {
					field.check();
				}
			} else if (fill.select !== undefined && fill.check !== undefined && field instanceof PDFRadioGroup) {
				const checked = fill.check(data);
				if (checked) {
					field.select(fill.select);
				}
			}
		} else if (fill.loc !== undefined) {
			const pageIndex = fill.loc.page || 0;

			const page = pages[pageIndex];

			const fontSize = fill.loc.fontSize || 12;

			// Adjust the pixel location for DPI.
			const {height} = page.getSize();
			const dpi = height / 11.0;

			// NOTE this needs to be mentioned in the documentation.
			const referenceDpi = 100;
			const scalingFactor = dpi / referenceDpi;

			const x = fill.loc.x * scalingFactor;

			// PDFlib uses a "Cartesian" coordinate system with 0 at the bottom left rather than the usual top left.
			const y = height - (fill.loc.y * scalingFactor) - fontSize;

			if (fill.text !== undefined) {
				const text = fill.text(data);
				page.drawText(text, {x, y, size: fontSize});
			} else if (fill.check !== undefined) {
				const checked = fill.check(data);
				if (checked) {
					page.drawText('X', {x, y, size: fontSize});
				}
			}
		}
	}

	// Flatten the form fields into the document.
	form.flatten();

	return doc;
}

/**
 * Do we still need this?
 */
async function fetchAndFill(formFilename, fills, data) {
	return fetch(formFilename)
		.then(async response => response.arrayBuffer())
		.then(PDFDocument.load)
		.then(doc => fillForm(doc, fills, data));
}

/**
 * Generate the guide as a PDF ArrayBuffer from the given `data`.
 * @param {Person} data
 * @return {Promise<Uint8Array>} Customized PDF guide
 */
async function makeGuide(data) {
	// Do any additional variable assignment here.
	const allData = Object.assign(data, countyInfo[data.county]);

	const renderedHtml = render('./guide.html.njk', allData);

	const pdf = await html2pdf()
		.set({
			pagebreak: {
				mode: ['avoid-all'],
			},
			margin: 10,
		}).from(renderedHtml).outputPdf('arraybuffer');

	return pdf;
}

/**
 * Compile all necessary documents as a single PDF ArrayBuffer from the given `data`.
 *
 * @param {Process} process
 * @param {Person} data
 * @return {Promise<Uint8Array>} Compiled documents
 */
async function fetchAll(process, data) {
	const allDocuments = await Promise.all(process.documents
		.filter(doc => {
			if (Object.prototype.hasOwnProperty.call(doc, 'include')) {
				return doc.include(data);
			}

			return false;
		})
		.map(async doc => {
			if (Object.prototype.hasOwnProperty.call(doc, 'map')) {
				return fetchAndFill(`/forms/${doc.filename}`, doc.map, data);
			}

			return fetch(`/forms/${doc.filename}`)
				.then(res => res.arrayBuffer())
				.then(PDFDocument.load);
		}));

	if (data.age && data.county) {
		const guide = await PDFDocument.load(await makeGuide(data));

		// Append to front
		allDocuments.unshift(guide);
	}

	const result = await PDFDocument.create();
	allDocuments.filter(doc => doc)
		.forEach(async doc => {
			const numPages = doc.getPageCount();
			const pages = await result.copyPages(doc, [...Array(numPages).keys()]);
			for (const page of pages) {
				result.addPage(page);
			}
		});

	return result.save();
}

/**
 * Label the fillable form fields of a given `doc`ument.
 * For dev purposes.
 *
 * @param {PDFDocument} doc
 * @return {Promise<Uint8Array>} A labeled document.
 */
async function labelFields(doc) {
	const form = doc.getForm();
	const fields = form.getFields();

	for (const field of fields) {
		const type = field.constructor.name;
		const name = field.getName();

		console.log(`${type}: ${name}`);
		if (field instanceof PDFRadioGroup) {
			for (const option of field.getOptions()) {
				console.log(`${type}: ${option}`);
			}
		}

		if (field instanceof PDFTextField) {
			field.setMaxLength(undefined);
			field.setText(name);
		}
	}

	return doc.save();
}

/**
 * Generate a data object from index.html.
 *
 * @return {Person}
 */
function makeData() {
	return {
		legalName: {
			first: document.getElementById('legal-name-first').value,
			middle: document.getElementById('legal-name-middle').value,
			last: document.getElementById('legal-name-last').value,
			suffix: document.getElementById('legal-suffix').value,
		},

		chosenName: {
			first: document.getElementById('chosen-name-first').value,
			middle: document.getElementById('chosen-name-middle').value,
			last: document.getElementById('chosen-name-last').value,
			suffix: document.getElementById('chosen-suffix').value,
		},

		reasonForNameChange: document.getElementById('name-change-reason').value,

		sealBirthCertificate: document.getElementById('seal-birth-certificate').checked,
		birthplace: {
			city: document.getElementById('birth-city').value,
			state: document.getElementById('birth-state').value,
		},

		dateOfBirth: document.getElementById('birthdate').value,

		assignedSex: document.getElementById('birth-sex').value,
		gender: document.getElementById('gender').value,

		doNotPublish: document.getElementById('do-not-publish').checked,
		parentsAreOkay: !(document.getElementById('parents-are-not-okay').checked),
		age: document.getElementById('age').value || numericalAge(document.getElementById('birthdate').value),

		mothersBirthName: {
			first: document.getElementById('mother-name-first').value,
			middle: document.getElementById('mother-name-middle').value,
			last: document.getElementById('mother-name-last').value,
			suffix: document.getElementById('mother-suffix').value,
		},
		mothersDateOfBirth: document.getElementById('mothers-birthdate').value,

		fathersBirthName: {
			first: document.getElementById('father-name-first').value,
			middle: document.getElementById('father-name-middle').value,
			last: document.getElementById('father-name-last').value,
			suffix: document.getElementById('father-suffix').value,
		},
		fathersDateOfBirth: document.getElementById('fathers-birthdate').value,

		areaCode: document.getElementById('area-code').value,
		phone: document.getElementById('phone').value,

		streetAddress: document.getElementById('street-address').value,
		city: document.getElementById('city').value,
		state: document.getElementById('state').value,

		county: document.getElementById('county').value,
		zip: document.getElementById('zip').value,
		email: document.getElementById('email').value,

		passport: document.getElementById('passport').value,

		representativeName: {
			first: document.getElementById('representative-name-first').value,
			middle: document.getElementById('representative-name-middle').value,
			last: document.getElementById('representative-name-last').value,
			suffix: document.getElementById('representative-suffix').value,
		},

	};
}

const debug = false;

/**
 * Generate and download the documents from the given `data`.
 *
 * @param {Person} data
 */
function generate(data) {
	if (debug) {
		fetch('./forms/mdos_sdf.pdf')
			.then(async response => response.arrayBuffer())
			.then(PDFDocument.load)
			.then(labelFields)
			.then(doc => {
				const url = URL.createObjectURL(new Blob([doc], {type: 'application/pdf'}));
				const link = document.createElement('a');
				link.download = 'result.pdf';
				link.href = url;
				link.click();
				URL.revokeObjectURL(link.href);
			});
	} else {
		fetchAll(michiganNameChange, data)
			.then(doc => {
				const url = URL.createObjectURL(new Blob([doc], {type: 'application/pdf'}));
				const link = document.createElement('a');
				link.download = 'gender_affirming_documents.pdf';
				link.href = url;
				link.click();
				URL.revokeObjectURL(link.href);
			});
	}
}

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => generate(makeData()));
