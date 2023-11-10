import { useState } from 'react';

import {PDFDocument, PDFTextField, PDFCheckBox, PDFRadioGroup} from 'pdf-lib';
import {render} from 'nunjucks';
import html2pdf from 'html2pdf.js';

import {michiganNameChange, targets, michiganProcesses} from './process';
import {fields, renderField} from './fields';
import shakeTree from './shakeTree';
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
	const data = {};

	const neededFields = neededFieldNames();

	neededFields.forEach(fieldName => {
		console.log(fieldName);
		const field = fields[fieldName];

		switch (field.type) {
			case 'boolean':
				data[fieldName] = document.getElementById(field.name).checked;
				break;
			case 'option':
				data[fieldName] = document.querySelector(`input[name="${fieldName}"]:checked`).value;
				break;
			case 'string':
			case 'email':
			case 'tel':
			case 'number':
			case 'Date':
				data[fieldName] = document.getElementById(field.name).value;
				break;
			case 'Name':
				// FIXME Sasha you goddamned whore. - future Sasha
				data[fieldName] = {
					first: document.getElementById(`${field.name}-first`),
					middle: document.getElementById(`${field.name}-middle`),
					last: document.getElementById(`${field.name}-last`),
					suffix: document.getElementById(`${field.name}-suffix`),
				};
				break;
			default:
				console.log(`Missing field data for "${field.name}"`);
				break;
		}
	});

	return data;
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

function neededFieldNames() {
	const processes = document.getElementById('processes');
	const allProcesses = Array.from(processes.querySelectorAll('input'));
	const checkedProcesses = allProcesses
		.filter(element => element.checked)
		.map(element => {
			const name = element.getAttribute('name');
			return michiganProcesses[name];
		});

	const names = [];
	for (const process of checkedProcesses) {
		shakeTree(process, names);
	}

	return names;
}

function App() {
    const [visibleFields, setVisibleFields] = useState([]);

	function updateForm() {
        const fieldNames = neededFieldNames();
        const neededFields = Object.entries(fields).filter(([name, _]) => {
            return fieldNames.includes(name);
        }).map(([_, field]) => field);

        setVisibleFields(neededFields);
	}

	return (
        <ol>
        <li>
            <p>I live in <strong>Michigan.</strong> I was born in <strong>Michigan.</strong><br />(Other states coming soon.)</p>
        </li>
        <li>
            <fieldset id="processes">
                <legend>I need to...</legend>
              <ul>
              { Object.entries(targets).map(([name, description]) => <li key={name}>
   				<input type="checkbox" id={name} name={name} onChange={updateForm} />
				  <span>{description}</span>
				  <br />
                 </li>
              ) }
				</ul>
            </fieldset>
            <form id="main-form">
				{ visibleFields.map(renderField) }
              { (visibleFields.length > 0) && <input type="submit" value="Generate forms" onClick={ev => {
                  ev.preventDefault();
                  generate(makeData());
              }}/> }
            </form>
        </li>
        </ol>
	);
}

export default App
