import { PDFDocument, type PDFForm, type PDFField, PDFTextField, PDFCheckBox, PDFRadioGroup } from 'pdf-lib'

import { type PersonalData, type Formfill } from './types'
import { nameChangeMap, ssnMap, birthCertMap, piiMap, noticeMap, feeWaiverMap, mdosSexMap, miSexMap } from './maps'
import { sampleData } from './util'

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


async function fetchAll (data: PersonalData): Promise<Uint8Array> {
  const nameChange = await fetchAndFill('./forms/name-change.pdf', nameChangeMap, data)
  const pii = await fetchAndFill('./forms/m97a.pdf', piiMap, data)
  const pubNotice = await fetchAndFill('./forms/pc50.pdf', noticeMap, data)
  const feeWaiver = await fetchAndFill('./forms/mc20.pdf', feeWaiverMap, data)
  const birthCert = await fetchAndFill('./forms/birth-cert.pdf', birthCertMap, data)
  const mdosSex = await fetchAndFill('./forms/mdos_sdf.pdf', mdosSexMap, data)
  const miSex = await fetchAndFill('./forms/mi_sdf.pdf', miSexMap, data)
  const socialSecurity = await fetchAndFill('./forms/ss-5-decrypted.pdf', ssnMap, data)

  const result = await PDFDocument.create()
  const nameChangePages = await result.copyPages(nameChange, [0, 1, 2])
  const piiPages = await result.copyPages(pii, [0])
  const feeWaiverPages = await result.copyPages(feeWaiver, [0])
  const birthCertPages = await result.copyPages(birthCert, [0, 1])
  const mdosSexPages = await result.copyPages(mdosSex, [0])
  const miSexPages = await result.copyPages(miSex, [0])
  const socialSecurityPages = await result.copyPages(socialSecurity, [0, 1, 2, 3, 4])

  const allDocs = [nameChangePages, piiPages, feeWaiverPages, birthCertPages, mdosSexPages, miSexPages, socialSecurityPages]

  for (const doc of allDocs) {
    for (const page of doc) {
      result.addPage(page)
    }
  }

  return await result.save()
}

async function labelFields (doc: PDFDocument): Promise<Uint8Array> {
  const form: PDFForm = doc.getForm()
  const fields: PDFField[] = form.getFields()

  for (const field of fields) {
    const type = field.constructor.name
    const name = field.getName()
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

const debug = true 

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
    maritalStatus: document.getElementById('marital-status').value,
    reasonForNameChange: document.getElementById('name-change-reason').value,

    sealBirthCertificate: document.getElementById('seal-birth-certificate').checked,

    birthplace: {
      city: document.getElementById('birth-city').value,
      state: document.getElementById('birth-state').value,
    },

    dateOfBirth: new Date(document.getElementById('birthdate').value),

    assignedSex: document.getElementById('birth-sex').value,
    gender: document.getElementById('gender').value,

    parentsAreOkay: !(document.getElementById('parents-are-not-okay').checked),

    mothersBirthName: {
      first: document.getElementById('mother-name-first').value,
      middle: document.getElementById('mother-name-middle').value,
      last: document.getElementById('mother-name-last').value,
      suffix: document.getElementById('mother-suffix').value,
    },
    mothersDateOfBirth: new Date(document.getElementById('mothers-birthdate').value),

    fathersBirthName: {
      first: document.getElementById('father-name-first').value,
      middle: document.getElementById('father-name-middle').value,
      last: document.getElementById('father-name-last').value,
      suffix: document.getElementById('father-suffix').value,
    },
    fathersDateOfBirth: new Date(document.getElementById('fathers-birthdate').value),

    areaCode: document.getElementById('area-code').value,
    phone: document.getElementById('phone').value,

    streetAddress: document.getElementById('street-address').value,
    city: document.getElementById('city').value,
    state: document.getElementById('state').value,

    county: document.getElementById('county').value,
    zip: document.getElementById('zip').value,
    email: document.getElementById('email').value,

    representativeName: {
      first: document.getElementById('legal-name-first').value,
      middle: document.getElementById('legal-name-middle').value,
      last: document.getElementById('legal-name-last').value,
      suffix: document.getElementById('legal-suffix').value,
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
    console.log(data)
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
