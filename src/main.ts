import { PDFDocument, type PDFForm, type PDFField, PDFTextField, PDFCheckBox, PDFRadioGroup } from 'pdf-lib'
import { render } from 'nunjucks'
import { jsPDF } from 'jspdf'
import html2pdf from 'html2pdf.js'

import { type PersonalData, type Formfill } from './types'
import { nameChangeMap, ssnMap, birthCertMap, piiMap, noticeMap, feeWaiverMap, mdosSexMap, miSexMap } from './maps'
import { numericalAge, sampleData } from './util'
import countyInfo from './countyInfo.json'

function fillForm (doc: PDFDocument, fills: Formfill[], data: PersonalData): PDFDocument {
  const form: PDFForm = doc.getForm()
  const pages = doc.getPages()

  for (const fill of fills) {
    if (fill.field !== undefined) {
      const field: PDFField = fill.field(form)
      if (fill.text !== undefined && field instanceof PDFTextField) {
        const text = fill.text(data)
        field.setText(text)
      } else if (fill.check !== undefined && field instanceof PDFCheckBox) {
        const checked: boolean = fill.check(data)
        if (checked) {
          field.check()
        }
      } else if (fill.select !== undefined && fill.check !== undefined && field instanceof PDFRadioGroup) {
        const checked: boolean = fill.check(data)
        if (checked) {
          field.select(fill.select)
        }
      }
    } else if (fill.loc !== undefined) {
      const pageIndex = 0 // FIXME

      const page = pages[pageIndex]

      const fontSize = 12

      // Adjust the pixel location for DPI.
      const { height } = page.getSize()
      const dpi = height / 11.0

      // NOTE this needs to be mentioned in the documentation.
      const referenceDpi = 100
      const scalingFactor = dpi / referenceDpi

      const x = fill.loc.x * scalingFactor

      // PDFlib uses a "Cartesian" coordinate system with 0 at the bottom left rather than the usual top left.
      const y = height - fill.loc.y * scalingFactor - fontSize

      if (fill.text !== undefined) {
        const text = fill.text(data)
        page.drawText(text, { x, y, size: fontSize })
      } else if (fill.check !== undefined) {
        page.drawText('X', { x, y, size: fontSize })
      }
    }
  }

  return doc
}

async function fetchAndFill (formFilename: string, fills: Formfill[], data: PersonalData): Promise<PDFDocument> {
  return await fetch(formFilename)
    .then(async response => await response.arrayBuffer())
    .then(PDFDocument.load)
    .then(doc => fillForm(doc, fills, data))
}

async function makeGuide(data: PersonalData): Promise<Uint8Array> {
  // Do any additional variable assignment here.
  const allData = Object.assign(data, countyInfo[data.county])

  let renderedHtml = render("./guide.html.njk", allData)

  let pdf = await html2pdf()
     .set({
       pagebreak: { mode: 'avoid-all' },
       margin: 10,
     }).from(renderedHtml).outputPdf("arraybuffer")

  return pdf
}

async function fetchAll (data: PersonalData): Promise<Uint8Array> {

  const nameChange = await fetchAndFill('./forms/name-change.pdf', nameChangeMap, data)
  const pii = await fetchAndFill('./forms/m97a.pdf', piiMap, data)
  const pubNotice = await fetchAndFill('./forms/pc50.pdf', noticeMap, data)
  const feeWaiver = await fetchAndFill('./forms/mc20.pdf', feeWaiverMap, data)
  const birthCert = await fetchAndFill('./forms/birth-cert.pdf', birthCertMap, data)
  const mdosSex = await fetchAndFill('./forms/mdos_sdf.pdf', mdosSexMap, data)
  const miSex = await fetchAndFill('./forms/mi_sdf.pdf', miSexMap, data)
  const acceptableId = await fetch('./forms/acceptable-id.pdf').then(res => res.arrayBuffer()).then(PDFDocument.load)
  const socialSecurity = await fetchAndFill('./forms/ss-5-decrypted.pdf', ssnMap, data)

  let allDocuments = [ nameChange, pii, pubNotice, feeWaiver, birthCert, mdosSex, miSex, acceptableId, socialSecurity ]

  if (data.age && data.county) {
    const guide = await PDFDocument.load(await makeGuide(data))

    // Append to front
    allDocuments.unshift(guide)
  }

  const result = await PDFDocument.create()
  for (const doc of allDocuments) {
    let numPages = doc.getPageCount()

    let pages = await result.copyPages(doc, [...Array(numPages).keys()])
    for (const page of pages) {
      result.addPage(page);
    }
  }
  
  return await result.save()
}

async function labelFields (doc: PDFDocument): Promise<Uint8Array> {
  const form: PDFForm = doc.getForm()
  const fields: PDFField[] = form.getFields()

  for (const field of fields) {
    const type = field.constructor.name

    console.log(`${String(type)}: ${String(name)}`)
    if (field instanceof PDFRadioGroup) {
      for (const option of field.getOptions()) {
        console.log(`${String(type)}: ${String(option)}`)
      }
    }
    if (field instanceof PDFTextField) {
      field.setMaxLength(undefined)
      field.setText(name)
    }
  }

  return await doc.save()
}

const debug = false

function makeData(): PersonalData {
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

    representativeName: {
      first: document.getElementById('representative-name-first').value,
      middle: document.getElementById('representative-name-middle').value,
      last: document.getElementById('representative-name-last').value,
      suffix: document.getElementById('representative-suffix').value,
    },

  }
}
function generate(data) {
  if (debug) {
    fetch('./forms/m97a.pdf')
      .then(async response => await response.arrayBuffer())
      .then(PDFDocument.load)
      .then(labelFields)
      .then(doc => {
        const url = URL.createObjectURL(new Blob([doc], { type: 'application/pdf' }))
        const link = document.createElement('a')
        link.download = 'result.pdf'
        link.href = url
        link.click()
        URL.revokeObjectURL(link.href)
      })
  } else {
    fetchAll(data)
      .then(doc => {
        const url = URL.createObjectURL(new Blob([doc], { type: 'application/pdf' }))
        const link = document.createElement('a')
        link.download = 'gender_affirming_documents.pdf'
        link.href = url
        link.click()
        URL.revokeObjectURL(link.href)
      })
  }
}

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', ev => generate(makeData()));
