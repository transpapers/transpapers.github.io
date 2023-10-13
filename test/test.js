import assert from 'assert'

import shakeTree from '../src/shakeTree.js'
import { michiganNameChange } from '../src/process.js'

describe('shakeTree()', () => {
  it('regression test', () => {
    const expected = [
      'legalName',
      'dateOfBirth',
      'representativeName',
      'streetAddress',
      'city',
      'state',
      'zip',
      'areaCode',
      'phone',
      'parentsAreOkay',
      'mothersBirthName',
      'fathersBirthName',
      'reasonForNameChange',
      'chosenName',
      'sealBirthCertificate',
      'county',
      'doNotPublish',
    ]

    assert.deepEqual(shakeTree(michiganNameChange), expected)
  })
})
