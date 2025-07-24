import {
  formatDate,
  fullName,
  isMinor,
  representativeName,
  addZero,
  numericalAge,
  nameInitials,
  phoneAreaCode,
  phoneStart,
  phoneEnd,
  formatContactInfo,
  ContactFormat as cf,
} from "../../lib/util";

import {
  GenderMarker,
  DateFormatPart as DATE,
  NameFormatPart as FML,
} from "../../types/types";
import { Formfill } from "../../types/formfill";

// Maps appear in the order they will be collated.
// State forms come first, in the order they should be filed;
// then state documents (which need no map information);
// then county forms as there are a few counties with unique forms
// then county documents (which need no map information)

/**
 * Petition to Change the Name of an Adult (Texas form FM-NCA-100.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const nameChangeAdultMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Print current full legal name of person asking for name change",
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "County",
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "First",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "Middle",
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "Last",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "First_2",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "Middle_2",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "Last_2",
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    fieldName: "The reason I want to change my name is 1",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Text2",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "City",
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "County_2",
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.name,
    fieldName: "State",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "ZIP code",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Social Security Number",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "City_2",
  }),
  (applicant) => ({
    text: applicant.birthJurisdiction?.name,
    fieldName: "State_2",
  }),
  (applicant) => ({
    text: applicant.birthJurisdiction?.abbreviation ? "USA" : "",
    fieldName: "Country",
  }),
  (applicant) => ({
    fieldName: "undefined",
    choice: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
      }
    })(),
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) ? fullName(applicant.birthName) : "",
    fieldName: "h",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName:
      "Have you ever been charged with a Class A or B misdemeanor or a felony",
    choice: "No",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName:
      "The court may order your name changed if you were pardoned or at least two years have passed since",
    choice: "No_2",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName:
      "If yes  You must attach proof that you notified the appropriate local law enforcement authority of your proposed",
    choice: "No_3",
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    fieldName:
      "I ask the Court to make an Order to change my name and any other Orders I may be entitled to",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 2, x: 115, y: 602 },
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Date",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "City_3",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName:
      "crime to make a false unsworn declaration under penalty of perjury in Texas See Texas Penal Code 3702",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "My current legal name is",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "my date of birth is",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "and my address is",
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.abbreviation,
    fieldName: "State_4",
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.abbreviation ? "USA" : "",
    fieldName: "Country_2",
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName:
      "I declare under penalty of perjury that the foregoing is true and correct",
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.name,
    fieldName: "undefined_3",
  }),
  () => ({
    check: true,
    fieldName:
      "A legible and complete set of your fingerprints on a fingerprint card in a form acceptable to the Texas",
  }),
];

/**
 * Order Changing the Name of an Adult (Texas form FM-NCA-200.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const nameChangeOrderAdultMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Print current full legal name of person asking for name change",
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "County",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName:
      "The Court finds that Petitioners personal information is as follows",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) ? fullName(applicant.birthName) : "",
    fieldName: "b",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Street address",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "City",
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "County_2",
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.abbreviation,
    fieldName: "State",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "ZIP code",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of birth",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    loc: { page: 1, x: 220, y: 361 },
  }),
  (applicant) => ({
    text: applicant.birthJurisdiction?.name,
    loc: { page: 1, x: 540, y: 361 },
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.abbreviation ? "USA" : "",
    loc: { page: 1, x: 695, y: 361 },
  }),
  (applicant) => ({
    fieldName: "County_3",
    choice: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
      }
    })(),
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "does not have an FBI number or SID number",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "has not been charged with a class A or B misdemeanor or felony",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "has not been convicted of a felony",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "is not required to register as a sex offender",
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "First",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "Middle",
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "Last",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "First_2",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "Middle_2",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "Last_2",
  }),
  (applicant) => ({
    check: applicant.birthJurisdiction?.name === "Texas",
    fieldName:
      "Check box if applicable The name on the Petitioners birth certificate is",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.birthJurisdiction?.name === "Texas") {
        case true:
          return applicant.birthName.first
            ? applicant.birthName.first
            : applicant.legalName.first;
        case false:
          return "";
        default:
          return "";
      }
    })(),
    fieldName: "First_3",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.birthJurisdiction?.name === "Texas") {
        case true:
          return applicant.birthName.middle
            ? applicant.birthName.middle
            : applicant.legalName.middle;
        case false:
          return "";
        default:
          return "";
      }
    })(),
    fieldName: "Middle_3",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.birthJurisdiction?.name === "Texas") {
        case true:
          return applicant.birthName.last
            ? applicant.birthName.last
            : applicant.legalName.last;
        case false:
          return "";
        default:
          return "";
      }
    })(),
    fieldName: "Last_3",
  }),
  (applicant) => ({
    text:
      applicant.birthJurisdiction?.name === "Texas"
        ? applicant.chosenName.first
        : "",
    fieldName: "First_4",
  }),
  (applicant) => ({
    text:
      applicant.birthJurisdiction?.name === "Texas"
        ? applicant.chosenName.middle
        : "",
    fieldName: "Middle_4",
  }),
  (applicant) => ({
    text:
      applicant.birthJurisdiction?.name === "Texas"
        ? applicant.chosenName.last
        : "",
    fieldName: "Last_4",
  }),
];

/**
 * Adult Gender Change Packet (forms listed individually below)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const genderChangeAdultMap: Formfill[] = [
// Petition to Change the Sex/Gender Identifier of an Adult (Texas form TC-FM-GI1-100.)
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 100, y: 139 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 290, y: 420 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.M 
      && applicant.gender === GenderMarker.F 
      ? "X" : "",
    loc: { x: 127, y: 493 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.F 
      && applicant.gender === GenderMarker.M 
      ? "X" : "",
    loc: { x: 307, y: 493 },
  }),
  () => ({
    text: "X",
    loc: { x: 127, y: 550 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.M
      ? "X" : "",
    loc: { x: 341, y: 550 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.M
      ? "X" : "",
    loc: { x: 400, y: 550 },
  }),
  (applicant) => ({
    text: 
      applicant.gender === GenderMarker.M
      ? "X" : "",
    loc: { x: 507, y: 566 },
  }),
  (applicant) => ({
    text: 
      applicant.gender === GenderMarker.M
      ? "X" : "",
    loc: { x: 565, y: 566 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddressAndLocality),
    loc: { x: 245, y: 933 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 1, x: 210, y: 96 },
  }),
  (applicant) => ({
    text: applicant.birthCity,
    loc: { page: 1, x: 220, y: 333 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthStateAndCountry),
    loc: { page: 1, x: 545, y: 333 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.M
      ? "X" : "",
    loc: { page: 1, x: 488, y: 391 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.F
      ? "X" : "",
    loc: { page: 1, x: 555, y: 391 },
  }),
  (applicant) => ({
    text: 
      !applicant.hasCriminalRecord
      ? "X" : "",
    loc: { page: 1, x: 658, y: 512 },
  }),
  (applicant) => ({
    text: 
      !applicant.hasCriminalRecord
      ? "X" : "",
    loc: { page: 2, x: 623, y: 95 },
  }),
  (applicant) => ({
    text: 
      !applicant.hasCriminalRecord
      ? "X" : "",
    loc: { page: 2, x: 103, y: 555 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.M 
      && applicant.gender === GenderMarker.F 
      ? "X" : "",
    loc: { page: 2, x: 103, y: 688 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.F 
      && applicant.gender === GenderMarker.M 
      ? "X" : "",
    loc: { page: 2, x: 103, y: 688 },
  }),
  (applicant) => ({
    text: 
      applicant.birthJurisdiction?.name === "Texas" 
      && applicant.gender === GenderMarker.M 
      ? "X" : "",
    loc: { page: 2, x: 610, y: 852 },
  }),
  (applicant) => ({
    text: 
      applicant.birthJurisdiction?.name === "Texas"
      && applicant.gender === GenderMarker.F 
      ? "X" : "",
    loc: { page: 2, x: 671, y: 852 },
  }),
  (applicant) => ({
    text: 
      applicant.birthJurisdiction?.name === "Texas" 
      ? "" : applicant.birthJurisdiction?.name,
    loc: { page: 2, x: 450, y: 917 },
  }),
  (applicant) => ({
    text: 
      applicant.birthJurisdiction?.name === "Texas"
      ? "" : applicant.birthJurisdiction?.name,
    loc: { page: 2, x: 115, y: 956 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 3, x: 265, y: 207 },
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH],
        separator: "",
      }),
    ),
    loc: { page: 3, x: 225, y: 244 },
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, {
        format: [DATE.DAY],
        separator: "",
      }),
    ),
    loc: { page: 3, x: 290, y: 244 },
  }),
  (applicant) => ({
    text:
      formatDate(applicant.birthdate, {
        format: [DATE.YEAR],
        separator: "",
      },
    ),
    loc: { page: 3, x: 340, y: 244 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 3, x: 200, y: 281 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZipAndCountry),
    loc: { page: 3, x: 200, y: 315 },
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { page: 3, x: 222, y: 429 },
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.name,
    loc: { page: 3, x: 408, y: 429 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { page: 3, x: 505, y: 462 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { page: 3, x: 105, y: 498 },
  }),
  () => ({
    text: "X",
    loc: { page: 3, x: 128, y: 624 },
  }),
  () => ({
    text: "X",
    loc: { page: 3, x: 128, y: 664 },
  }),
// Final Order to Change the Sex/Gender Identifier of an Adult (TC-FM-GI1-200)
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 4, x: 100, y: 167 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 4, x: 300, y: 648 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 4, x: 255, y: 696 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndLocalityAndStateAndZip),
    loc: { page: 4, x: 260, y: 736 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 4, x: 315, y: 794 },
  }),
  (applicant) => ({
    text: applicant.birthCity,
    loc: { page: 4, x: 320, y: 893 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthStateAndCountry),
    loc: { page: 4, x: 595, y: 893 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.M
      ? "X" : "",
    loc: { page: 5, x: 549, y: 290 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.F
      ? "X" : "",
    loc: { page: 5, x: 617, y: 290 },
  }),
  (applicant) => ({
    text: 
      !applicant.hasCriminalRecord
      ? "X" : "",
    loc: { page: 5, x: 128, y: 366 },
  }),
  (applicant) => ({
    text: 
      !applicant.hasCriminalRecord
      ? "X" : "",
    loc: { page: 5, x: 128, y: 534 },
  }),
  (applicant) => ({
    text: 
      !applicant.hasCriminalRecord
      ? "X" : "",
    loc: { page: 5, x: 128, y: 688 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.M 
      && applicant.gender === GenderMarker.F 
      ? "X" : "",
    loc: { page: 5, x: 177, y: 874 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.F 
      && applicant.gender === GenderMarker.M 
      ? "X" : "",
    loc: { page: 5, x: 362, y: 874 },
  }),
  (applicant) => ({
    text: 
      applicant.birthJurisdiction?.name === "Texas"
      ? "X" : "",
    loc: { page: 6, x: 103, y: 96 },
  }),
  (applicant) => ({
    text: 
      applicant.gender === GenderMarker.M 
      ? "X" : "",
    loc: { page: 6, x: 552, y: 132 },
  }),
  (applicant) => ({
    text: 
      applicant.gender === GenderMarker.F 
      ? "X" : "",
    loc: { page: 6, x: 619, y: 132 },
  }),
  (applicant) => ({
    text: 
      applicant.birthJurisdiction?.name === "Texas"
      ? "" : "X",
    loc: { page: 6, x: 103, y: 158 },
  }),
  (applicant) => ({
    text: 
      applicant.birthJurisdiction?.name === "Texas" 
      ? "" : applicant.birthJurisdiction?.name,
    loc: { page: 6, x: 126, y: 176 },
  }),
  (applicant) => ({
    text: 
      applicant.birthJurisdiction?.name === "Texas"
      ? "" : applicant.birthJurisdiction?.name,
    loc: { page: 6, x: 314, y: 194 },
  }),
];

/**
 * Petition to Change the Name of a Child or Children (Texas form FM-NCC1-100.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const nameChangeMinorBothParentsMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "1",
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "County Texas",
  }),
  (applicant) => ({
    text: `${applicant.representativeName?.first ?? ""} ${applicant.representativeName?.middle ?? ""} ${applicant.representativeName?.last ?? ""}`,
    fieldName: "The Petitioner is",
  }),
  (applicant) => ({
    text: applicant.representativeName?.suffix ?? "",
    fieldName: "undefined",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Current Name of Child 1",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Childs Current name",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "Home Address",
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "County",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Birth date",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthCityStateCountry),
    fieldName: "Country",
  }),
  (applicant) => ({
    check: numericalAge(applicant.birthdate ?? "") < 10,
    fieldName: "Child is younger than 10 years old Consent is not required",
  }),
  (applicant) => ({
    check: numericalAge(applicant.birthdate ?? "") > 9,
    fieldName:
      "Child is 10 years old or older and has consented in writing to this name change",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "The child is not required to register as a sex offender",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "There are no court orders regarding the child",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "First",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "Middle",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "Last",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "My date of birth is",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "undefined_12",
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "County_2",
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.name,
    fieldName: "undefined_14",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay
      ? formatContactInfo(applicant, cf.FullAddress)
      : "",
    fieldName: "undefined_16",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? applicant.residentLocality?.name : "",
    fieldName: "County_3",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? applicant.residentJurisdiction?.name : "",
    fieldName: "undefined_18",
  }),
];

/**
 * Order Changing the Name of a Child [Set A] (Texas form FM-NCC1-200.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const nameChangeMinorBothParentsOrderMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 105, y: 188 },
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { x: 450, y: 210 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 265, y: 442 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 1, x: 270, y: 154 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    loc: { page: 1, x: 230, y: 190 },
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { page: 1, x: 630, y: 190 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 1, x: 195, y: 240 },
  }),
  (applicant) => ({
    text: applicant.birthCity,
    loc: { page: 1, x: 455, y: 240 },
  }),
  (applicant) => ({
    text: applicant.birthJurisdiction?.name,
    loc: { page: 1, x: 560, y: 240 },
  }),
  (applicant) => ({
    text: applicant.age && applicant.age < 10 ? "X" : "",
    loc: { page: 1, x: 128, y: 295 },
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.age && applicant.age > 9 ? "X" : "",
    loc: { page: 1, x: 128, y: 317 },
  }),
  (applicant) => ({
    text: !applicant.hasCriminalRecord ? "X" : "",
    loc: { page: 1, x: 128, y: 360 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? "X" : "",
    loc: { page: 1, x: 128, y: 453 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 1, x: 200, y: 650 },
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    loc: { page: 1, x: 200, y: 690 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { page: 2, x: 520, y: 163 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    loc: { page: 2, x: 215, y: 208 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { page: 2, x: 205, y: 257 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay
      ? formatContactInfo(applicant, cf.FullAddress)
      : "",
    loc: { page: 2, x: 215, y: 394 },
  }),
];

/**
 * Petition to Change the Name of a Child [Set C] (Texas form FM-NCC3-100.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const nameChangeMinorSingleParentMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 105, y: 188 },
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { x: 450, y: 210 },
  }),
  (applicant) => ({
    text: applicant.representativeName?.first,
    loc: { x: 240, y: 380 },
  }),
  (applicant) => ({
    text: applicant.representativeName?.middle,
    loc: { x: 425, y: 380 },
  }),
  (applicant) => ({
    text: `${applicant.representativeName?.last ?? ""} ${applicant.representativeName?.suffix ?? ""}`,
    loc: { x: 600, y: 380 },
  }),
  () => ({
    text: "X",
    loc: { x: 103, y: 614 },
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    loc: { x: 270, y: 778 },
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    loc: { x: 430, y: 778 },
  }),
  (applicant) => ({
    text: `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    loc: { x: 610, y: 778 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    loc: { x: 230, y: 815 },
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { x: 625, y: 815 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 200, y: 882 },
  }),
  (applicant) => ({
    text: applicant.birthCity,
    loc: { x: 220, y: 917 },
  }),
  (applicant) => ({
    text: applicant.birthJurisdiction?.name,
    loc: { x: 430, y: 917 },
  }),
  (applicant) => ({
    text: applicant.age && applicant.age < 10 ? "X" : "",
    loc: { x: 128, y: 966 },
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.age && applicant.age > 9 ? "X" : "",
    loc: { page: 1, x: 128, y: 95 },
  }),
  (applicant) => ({
    text: !applicant.hasCriminalRecord ? "X" : "",
    loc: { page: 1, x: 128, y: 140 },
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    loc: { page: 1, x: 130, y: 412 },
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    loc: { page: 1, x: 375, y: 412 },
  }),
  (applicant) => ({
    text: `${applicant.chosenName.last} ${applicant.chosenName.suffix ?? ""}`,
    loc: { page: 1, x: 580, y: 412 },
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    loc: { page: 1, x: 500, y: 658 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 1, x: 105, y: 700 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { page: 1, x: 500, y: 700 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 1, x: 105, y: 736 },
  }),
  (applicant) => ({
    text: applicant.residentCity,
    loc: { page: 1, x: 440, y: 736 },
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.name,
    loc: { page: 1, x: 595, y: 736 },
  }),
  (applicant) => ({
    text: applicant.zip,
    loc: { page: 1, x: 695, y: 736 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { page: 1, x: 210, y: 780 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 2, x: 185, y: 130 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    loc: { page: 2, x: 205, y: 162 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { page: 2, x: 235, y: 194 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { page: 2, x: 600, y: 194 },
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { page: 2, x: 560, y: 325 },
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.name,
    loc: { page: 2, x: 170, y: 374 },
  }),
];

/**
 * Order Changing the Name of a Child [Set C] (Texas form FM-NCC3-200.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const nameChangeMinorSingleParentOrderMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 105, y: 172 },
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { x: 450, y: 194 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 250, y: 379 },
  }),
  () => ({
    text: "X",
    loc: { x: 103, y: 490 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 320, y: 882 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 295, y: 964 },
  }),
  (applicant) => ({
    text: applicant.birthCity,
    loc: { page: 1, x: 315, y: 98 },
  }),
  (applicant) => ({
    text: applicant.birthJurisdiction?.name,
    loc: { page: 1, x: 505, y: 98 },
  }),
  (applicant) => ({
    text: applicant.age && applicant.age < 10 ? "X" : "",
    loc: { page: 1, x: 128, y: 230 },
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.age && applicant.age > 9 ? "X" : "",
    loc: { page: 1, x: 128, y: 256 },
  }),
  (applicant) => ({
    text: !applicant.hasCriminalRecord ? "X" : "",
    loc: { page: 1, x: 128, y: 318 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 1, x: 220, y: 634 },
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    loc: { page: 1, x: 210, y: 680 },
  }),
];

/**
 * Petition to Change the Name of a Child [Set E] (Texas form FM-NCC5-100.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const nameChangeMinorGuardianMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 105, y: 188 },
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { x: 450, y: 210 },
  }),
  (applicant) => ({
    text: applicant.representativeName?.first,
    loc: { x: 240, y: 388 },
  }),
  (applicant) => ({
    text: applicant.representativeName?.middle,
    loc: { x: 425, y: 388 },
  }),
  (applicant) => ({
    text: `${applicant.representativeName?.last ?? ""} ${applicant.representativeName?.suffix ?? ""}`,
    loc: { x: 600, y: 388 },
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    loc: { page: 2, x: 270, y: 776 },
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    loc: { page: 2, x: 430, y: 776 },
  }),
  (applicant) => ({
    text: `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    loc: { page: 2, x: 610, y: 776 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    loc: { page: 2, x: 230, y: 812 },
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { page: 2, x: 630, y: 812 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 2, x: 200, y: 878 },
  }),
  (applicant) => ({
    text: applicant.birthCity,
    loc: { page: 2, x: 220, y: 914 },
  }),
  (applicant) => ({
    text: applicant.birthJurisdiction?.name,
    loc: { page: 2, x: 430, y: 914 },
  }),
  (applicant) => ({
    text: applicant.age && applicant.age < 10 ? "X" : "",
    loc: { page: 2, x: 128, y: 963 },
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.age && applicant.age > 9 ? "X" : "",
    loc: { page: 3, x: 128, y: 95 },
  }),
  (applicant) => ({
    text: !applicant.hasCriminalRecord ? "X" : "",
    loc: { page: 3, x: 128, y: 140 },
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    loc: { page: 3, x: 130, y: 412 },
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    loc: { page: 3, x: 375, y: 412 },
  }),
  (applicant) => ({
    text: `${applicant.chosenName.last} ${applicant.chosenName.suffix ?? ""}`,
    loc: { page: 3, x: 580, y: 412 },
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    loc: { page: 3, x: 500, y: 658 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 3, x: 105, y: 700 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { page: 3, x: 500, y: 700 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 3, x: 105, y: 736 },
  }),
  (applicant) => ({
    text: applicant.residentCity,
    loc: { page: 3, x: 440, y: 736 },
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.name,
    loc: { page: 3, x: 595, y: 736 },
  }),
  (applicant) => ({
    text: applicant.zip,
    loc: { page: 3, x: 695, y: 736 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { page: 3, x: 210, y: 780 },
  }),
];

/**
 * Order Changing the Name of a Child [Set E] (Texas form FM-NCC5-200.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const nameChangeMinorGuardianOrderMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 105, y: 188 },
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { x: 450, y: 210 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 265, y: 442 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 2, x: 270, y: 153 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    loc: { page: 2, x: 230, y: 190 },
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { page: 2, x: 630, y: 190 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 2, x: 195, y: 240 },
  }),
  (applicant) => ({
    text: applicant.birthCity,
    loc: { page: 2, x: 455, y: 240 },
  }),
  (applicant) => ({
    text: applicant.birthJurisdiction?.name,
    loc: { page: 2, x: 560, y: 240 },
  }),
  (applicant) => ({
    text: applicant.age && applicant.age < 10 ? "X" : "",
    loc: { page: 2, x: 128, y: 294 },
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.age && applicant.age > 9 ? "X" : "",
    loc: { page: 2, x: 128, y: 316 },
  }),
  (applicant) => ({
    text: !applicant.hasCriminalRecord ? "X" : "",
    loc: { page: 2, x: 128, y: 360 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 2, x: 200, y: 650 },
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    loc: { page: 2, x: 200, y: 690 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { page: 3, x: 520, y: 163 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    loc: { page: 3, x: 215, y: 208 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { page: 3, x: 205, y: 257 },
  }),
];

/**
 * Child's Consent to Name Change (Texas form FM-NCC1-113.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const nameChangeMinorsConsentMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 105, y: 180 },
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { x: 450, y: 200 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 235, y: 361 },
  }),
  (applicant) => ({
    text: String(applicant.age),
    loc: { x: 215, y: 427 },
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    loc: { x: 145, y: 504 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 360, y: 582 },
  }),
];

/**
 * Minor Gender Change Packet (forms listed individually below)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const genderChangeMinorMap: Formfill[] = [
// Agreed Petition to Change the Sex/Gender Identifier of a Minor (Texas form TC-FM-GI3-100.)
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 105, y: 178 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 265, y: 448 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? "X" : "",
    loc: { x: 307, y: 502 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? "X" : "",
    loc: { x: 143, y: 626 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? "X" : "",
    loc: { x: 330, y: 696 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? "X" : "",
    loc: { x: 127, y: 873 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 1, x: 220, y: 270 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    loc: { page: 1, x: 230, y: 311 },
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { page: 1, x: 630, y: 311 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.M
      ? "X" : "",
    loc: { page: 1, x: 493, y: 370 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.F
      ? "X" : "",
    loc: { page: 1, x: 561, y: 370 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 1, x: 200, y: 400 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthCityStateCountry),
    loc: { page: 1, x: 220, y: 440 },
  }),
  (applicant) => ({
    text:
      applicant.age && applicant.age < 10
        ? "X" : "",
    loc: { page: 1, x: 128, y: 506 },
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.age && applicant.age > 9
        ? "X" : "",
    loc: { page: 1, x: 128, y: 530 },
  }),
  (applicant) => ({
    text: 
      !applicant.hasCriminalRecord
      ? "X" : "",
    loc: { page: 1, x: 128, y: 582 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.M 
      && applicant.gender === GenderMarker.F 
      ? "X" : "",
    loc: { page: 2, x: 128, y: 180 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.F 
      && applicant.gender === GenderMarker.M 
      ? "X" : "",
    loc: { page: 2, x: 279, y: 180 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.M
      ? "X" : "",
    loc: { page: 2, x: 407, y: 228 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.F
      ? "X" : "",
    loc: { page: 2, x: 463, y: 228 },
  }),
  (applicant) => ({
    text: 
      applicant.gender === GenderMarker.M
      ? "X" : "",
    loc: { page: 2, x: 545, y: 245 },
  }),
  (applicant) => ({
    text: 
      applicant.gender === GenderMarker.F
      ? "X" : "",
    loc: { page: 2, x: 603, y: 245 },
  }),
  (applicant) => ({
    text: 
      applicant.birthJurisdiction?.name === "Texas" 
      && applicant.gender === GenderMarker.M 
      ? "X" : "",
    loc: { page: 2, x: 272, y: 639 },
  }),
  (applicant) => ({
    text: 
      applicant.birthJurisdiction?.name === "Texas"
      && applicant.gender === GenderMarker.F 
      ? "X" : "",
    loc: { page: 2, x: 333, y: 639 },
  }),
  (applicant) => ({
    text: 
      applicant.birthJurisdiction?.name === "Texas" 
      ? "" : applicant.birthJurisdiction?.name,
    loc: { page: 2, x: 613, y: 664 },
  }),
  (applicant) => ({
    text: 
      applicant.birthJurisdiction?.name === "Texas"
      ? "" : applicant.birthJurisdiction?.name,
    loc: { page: 2, x: 265, y: 696 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 3, x: 185, y: 206 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    loc: { page: 3, x: 200, y: 238 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { page: 3, x: 230, y: 271 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { page: 3, x: 595, y: 271 },
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { page: 3, x: 456, y: 357 },
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.name,
    loc: { page: 3, x: 635, y: 357 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? 
      formatContactInfo(applicant, cf.FullAddress) : "",
    loc: { page: 3, x: 200, y: 571 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? 
      applicant.residentLocality?.name : "",
    loc: { page: 3, x: 456, y: 688 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? 
     applicant.residentJurisdiction?.name : "",
    loc: { page: 3, x: 635, y: 688 },
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.age && applicant.age > 9
        ? "X" : "",
    loc: { page: 4, x: 103, y: 129 },
  }),
  () => ({
    text: "X",
    loc: { page: 4, x: 103, y: 162 },
  }),
  () => ({
    text: "X",
    loc: { page: 4, x: 103, y: 226 },
  }),
// Final Order to Change the Sex/Gender Identifier of a Minor (TC-FM-GI3-200)
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 5, x: 105, y: 167 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 5, x: 295, y: 393 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? "X" : "",
    loc: { page: 5, x: 315, y: 446 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? "X" : "",
    loc: { page: 5, x: 168, y: 495 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? "X" : "",
    loc: { page: 5, x: 337, y: 589 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? "X" : "",
    loc: { page: 5, x: 127, y: 641 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? "X" : "",
    loc: { page: 5, x: 177, y: 707 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 6, x: 225, y: 337 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    loc: { page: 6, x: 230, y: 378 },
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { page: 6, x: 630, y: 378 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 6, x: 200, y: 436 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthCityStateCountry),
    loc: { page: 6, x: 225, y: 478 },
  }),
  (applicant) => ({
    text:
      applicant.age && applicant.age < 10
        ? "X" : "",
    loc: { page: 6, x: 128, y: 540 },
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.age && applicant.age > 9
        ? "X" : "",
    loc: { page: 6, x: 128, y: 560 },
  }),
  (applicant) => ({
    text: !applicant.hasCriminalRecord
      ? "X" : "",
    loc: { page: 6, x: 128, y: 640 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.M 
      && applicant.gender === GenderMarker.F 
      ? "X" : "",
    loc: { page: 7, x: 186, y: 156 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.F 
      && applicant.gender === GenderMarker.M 
      ? "X" : "",
    loc: { page: 7, x: 369, y: 156 },
  }),
  (applicant) => ({
    text: 
      applicant.birthJurisdiction?.name === "Texas" 
      ? "X" : "",
    loc: { page: 7, x: 103, y: 252 },
  }),
  (applicant) => ({
    text: 
      applicant.birthJurisdiction?.name === "Texas" 
      && applicant.gender === GenderMarker.M 
      ? "X" : "",
    loc: { page: 7, x: 329, y: 284 },
  }),
  (applicant) => ({
    text: 
      applicant.birthJurisdiction?.name === "Texas"
      && applicant.gender === GenderMarker.F 
      ? "X" : "",
    loc: { page: 7, x: 391, y: 284 },
  }),
  (applicant) => ({
    text: 
      applicant.birthJurisdiction?.name === "Texas" 
      ? "" : "X",
    loc: { page: 7, x: 103, y: 309 },
  }),
  (applicant) => ({
    text: 
      applicant.birthJurisdiction?.name === "Texas" 
      ? "" : applicant.birthJurisdiction?.name,
    loc: { page: 7, x: 127, y: 325 },
  }),
  (applicant) => ({
    text: 
      applicant.birthJurisdiction?.name === "Texas"
      ? "" : applicant.birthJurisdiction?.name,
    loc: { page: 7, x: 265, y: 340 },
  }),
];

/**
 * Statement of Consent of Minor For Change of Sex/Gender Identifier (Texas form TC-FM-GI3-113.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const genderMinorConsentMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 105, y: 228 },
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) 
      ? fullName(applicant.birthName) 
      : fullName(applicant.legalName),
    loc: { x: 185, y: 409 },
  }),
  (applicant) => ({
    text: String(applicant.age),
    loc: { x: 136, y: 480 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.M 
      && applicant.gender === GenderMarker.F 
      ? "X" : "",
    loc: { x: 128, y: 591 },
  }),
  (applicant) => ({
    text: 
      applicant.assignedSex === GenderMarker.F 
      && applicant.gender === GenderMarker.M 
      ? "X" : "",
    loc: { x: 128, y: 591 },
  }),
];

/**
 * Respondent's Waiver of Service Only (Specific Waiver) (Texas form FM-Mod1-103.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const genderServiceWaiverMap: Formfill[] = [
  (applicant) => ({
    text: nameInitials(applicant.legalName, {
          format: [FML.FIRST, FML.MIDDLE, FML.LAST],
        }),
    loc: { x: 130, y: 208 },
  }),
  () => ({
    text: "X",
    loc: { x: 517, y: 226 },
  }),
  () => ({
    text: "Travis",
    loc: { x: 535, y: 288 },
  }),
];

/**
 * Statement of Inability to Afford Payment of Court Costs or an Appeal Bond (Texas form CB-CFFW-100.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const feeWaiverMap: Formfill[] = [
  (applicant) => ({
    text: `In re ${fullName(representativeName(applicant))}`,
    fieldName: "Fill Blank 1",
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "County / Condado",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "My full legal name is / Mi nombre legal completo es",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "My date of birth / Mi fecha de nacimiento es",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "My address is / Mi direcci�n es 2",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "My phone number  Mi n�mero telef�nico",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName:
      "My email I check often  Mi correo electr�nico que reviso con frecuencia",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? nameInitials(applicant.legalName, {
          format: [FML.FIRST, FML.MIDDLE, FML.LAST],
        })
      : "",
    fieldName: "Name NombreRow1",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.age?.toString() : "",
    fieldName: "Age EdadRow1",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "Child" : "",
    fieldName: "Relationship to me Parentesco ConmigoRow1",
  }),
  () => ({
    fieldName: "Qualification",
    choice: "Choice3",
  }),
  () => ({
    fieldName: "Type of application",
    choice: "Choice1",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "My name is  Mi nombre es",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH],
      separator: "/",
    }),
    fieldName: "Month / Mes",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.DAY],
      separator: "/",
    }),
    fieldName: "Day / D�a",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Year / A�o",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "My address is  Mi domicilio es",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentLocalityAndState),
    fieldName: "County state",
  }),
];

/**
 * Civil Case Information Sheet (Texas form unnumbered.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const caseInformationMap: Formfill[] = [
  (applicant) => ({
    text: `In re ${fullName(representativeName(applicant))}`,
    fieldName: "STYLED",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Name",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Address",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "CityStateZip",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "PlaintiffsPetitioners 1",
  }),
  () => ({
    check: true,
    fieldName: "Pro Se PlaintiffPetitioner",
  }),
  () => ({
    check: true,
    fieldName: "Name Change",
  }),
  () => ({
    check: true,
    fieldName: "Declaratory Judgment",
  }),
];

/**
 * Information on Suit Affecting the Family Relationship (Excluding Adoptions) (Texas form VS-165.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const nameChangeMinorFamilyInfoMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "1a COUNTY",
  }),
  () => ({
    check: true,
    fieldName: "Change in the name of the child (Section 1 and 3)",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "19a CHILD CURRENT NAME FIRST MIDDLE LAST SUFFIX",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "19b DATE OF BIRTH mmddyyyy",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        case GenderMarker.X:
          return "X";
        default:
          return "";
      }
    })(),
    fieldName: "19c SEX",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "19d BIRTHPLACE CITY COUNTY AND STATE",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName:
      "19e PRIOR NAME OF CHILD FIRST MIDDLE LAST SUFFIX  IF APPLICABLE",
  }),
];

/**
 * Texas Driver License or Identification Card Application (Texas form DL-14A.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const primaryIDMap: Formfill[] = [
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? applicant.chosenName.last
      : applicant.legalName.last,
    fieldName: "Last Name",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? applicant.chosenName.first
      : applicant.legalName.first,
    fieldName: "First Name",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? applicant.chosenName.middle
      : applicant.legalName.middle,
    fieldName: "Middle Name",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? (applicant.chosenName.suffix ?? "")
      : (applicant.legalName.suffix ?? ""),
    fieldName: "Suffix",
  }),
  (applicant) => ({
    text: applicant.birthName.last
      ? applicant.birthName.last
      : applicant.legalName.last,
    fieldName: "Last Name",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "DOB",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "Place of birth City",
  }),
  (applicant) => ({
    text: applicant.birthJurisdiction?.abbreviation,
    fieldName: "State",
  }),
  (applicant) => ({
    text: applicant.birthJurisdiction?.abbreviation ? "USA" : "",
    fieldName: "Country",
  }),
  (applicant) => ({
    text: applicant.fathersBirthName.last,
    fieldName: "Fathers Last Name",
  }),
  (applicant) => ({
    text: applicant.mothersBirthName.last,
    fieldName: "Mothers Maiden Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Residence Address",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "City",
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.abbreviation,
    fieldName: "State_2",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "Zip Code",
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.abbreviation ? "USA" : "",
    fieldName: "County_2",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Cellular Phone",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email",
  }),
];

/**
 * Correcting a Birth Certificate (Texas form VS-170.) (Name Only)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const birthCertNameCorrectionMap: Formfill[] = [
  () => ({
    check: true,
    fieldName: "Complete and sign this application See pages 4 and 5",
  }),
  () => ({
    check: true,
    fieldName:
      "Section 1 2 5 and 6 MUST be completed See pages 2 and 3 for how to complete Section 3 or 4",
  }),
  () => ({
    check: true,
    fieldName:
      "Everyone signing section 6 must sign before a notary public and ATTACH THEIR VALID",
  }),
  () => ({
    check: true,
    fieldName:
      "The application must be original Photocopies alterations strikethrough or write overs will not be",
  }),
  () => ({
    check: true,
    fieldName: "Submit the appropriate documentation See pages 2 and 3",
  }),
  () => ({
    check: true,
    fieldName: "Submit the appropriate fees See fee schedule below",
  }),
  () => ({
    check: true,
    fieldName: "Correction to Birth Certificate",
  }),
  () => ({
    text: "15.00",
    fieldName: "Total for correction to birth certificate",
  }),
  () => ({
    check: true,
    fieldName: "Certified Corrected Birth Certificate",
  }),
  () => ({
    check: true,
    fieldName: "Check Box10",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? fullName(representativeName(applicant))
      : fullName(applicant.chosenName),
    fieldName: "Name First Middle Last",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "Address Mailing Address City State Zip",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email Address",
  }),
  (applicant) => ({
    text: phoneAreaCode(applicant.phone),
    fieldName: "Daytime telephone number area code",
  }),
  (applicant) => ({
    text: phoneStart(applicant.phone),
    fieldName: "Daytime telephone number first three digits",
  }),
  (applicant) => ({
    text: phoneEnd(applicant.phone),
    fieldName: "Daytime telephone number last four digits",
  }),
  (applicant) => ({
    check: !isMinor(applicant),
    fieldName: "Your relationship to Person named on the birth certificate",
    choice: "Choice1",
  }),
  (applicant) => ({
    check: isMinor(applicant) && applicant.parentsAreOkay,
    fieldName: "Your relationship to Person named on the birth certificate",
    choice: "Choice0",
  }),
  (applicant) => ({
    text: applicant.birthName.first
      ? applicant.birthName.first
      : applicant.legalName.first,
    fieldName: "Childs First Name",
  }),
  (applicant) => ({
    text: applicant.birthName.middle
      ? applicant.birthName.middle
      : applicant.legalName.middle,
    fieldName: "Middle Name",
  }),
  (applicant) => ({
    text: applicant.birthName.last
      ? `${applicant.birthName.last} ${applicant.birthName.suffix ?? ""}`
      : `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    fieldName: "Last Name",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of Birth",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        case GenderMarker.X:
          return "X";
        default:
          return "";
      }
    })(),
    fieldName: "Sex",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "Place of Birth City or town",
  }),
  (applicant) => ({
    text: fullName(applicant.fathersBirthName),
    fieldName: "Full Maiden Name First Middle Last of Parent 1",
  }),
  (applicant) => ({
    text: fullName(applicant.mothersBirthName),
    fieldName: "Full Maiden Name First Middle Last of Parent 2",
  }),
  () => ({
    text: "Child's Name",
    fieldName: "List item 1 to be added, corrected or removed",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    fieldName: "What is on the birth certificate now for item 1",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "What should the birth certifcate say for item 1",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "First Name",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "Middle Name_2",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "Last Name_2",
  }),
  () => ({
    check: true,
    fieldName: "Group1",
    choice:
      "Yes, I would like a certified copy of the corrected birth certificate",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? fullName(representativeName(applicant))
      : fullName(applicant.chosenName),
    fieldName: "Printed Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Address",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "City",
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.name,
    fieldName: "State",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "Zip",
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.parentsAreOkay
        ? applicant.streetAddress
        : "",
    fieldName: "Address",
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.parentsAreOkay ? applicant.birthCity : "",
    fieldName: "City",
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.parentsAreOkay
        ? applicant.residentJurisdiction?.name
        : "",
    fieldName: "State",
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.parentsAreOkay ? applicant.zip : "",
    fieldName: "Zip",
  }),
];

/**
 * Correcting a Birth Certificate (Texas form VS-170.) (Gender Marker Only)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const birthCertGenderCorrectionMap: Formfill[] = [
  () => ({
    check: true,
    fieldName: "Complete and sign this application See pages 4 and 5",
  }),
  () => ({
    check: true,
    fieldName:
      "Section 1 2 5 and 6 MUST be completed See pages 2 and 3 for how to complete Section 3 or 4",
  }),
  () => ({
    check: true,
    fieldName:
      "Everyone signing section 6 must sign before a notary public and ATTACH THEIR VALID",
  }),
  () => ({
    check: true,
    fieldName:
      "The application must be original Photocopies alterations strikethrough or write overs will not be",
  }),
  () => ({
    check: true,
    fieldName: "Submit the appropriate documentation See pages 2 and 3",
  }),
  () => ({
    check: true,
    fieldName: "Submit the appropriate fees See fee schedule below",
  }),
  () => ({
    check: true,
    fieldName:
      "New Birth Certificate based on child's sex or parent's race or color",
  }),
  () => ({
    text: "25.00",
    fieldName:
      "Total for New Birth Certificate based on child's sex or parent's race or color",
  }),
  () => ({
    check: true,
    fieldName: "Certified Corrected Birth Certificate",
  }),
  () => ({
    check: true,
    fieldName: "Check Box1",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? fullName(representativeName(applicant))
      : fullName(applicant.legalName),
    fieldName: "Name First Middle Last",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "Address Mailing Address City State Zip",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email Address",
  }),
  (applicant) => ({
    text: phoneAreaCode(applicant.phone),
    fieldName: "Daytime telephone number area code",
  }),
  (applicant) => ({
    text: phoneStart(applicant.phone),
    fieldName: "Daytime telephone number first three digits",
  }),
  (applicant) => ({
    text: phoneEnd(applicant.phone),
    fieldName: "Daytime telephone number last four digits",
  }),
  (applicant) => ({
    check: !isMinor(applicant),
    fieldName: "Your relationship to Person named on the birth certificate",
    choice: "Choice1",
  }),
  (applicant) => ({
    check: isMinor(applicant) && applicant.parentsAreOkay,
    fieldName: "Your relationship to Person named on the birth certificate",
    choice: "Choice0",
  }),
  (applicant) => ({
    text: applicant.birthName.first
      ? applicant.birthName.first
      : applicant.legalName.first,
    fieldName: "Childs First Name",
  }),
  (applicant) => ({
    text: applicant.birthName.middle
      ? applicant.birthName.middle
      : applicant.legalName.middle,
    fieldName: "Middle Name",
  }),
  (applicant) => ({
    text: applicant.birthName.last
      ? `${applicant.birthName.last} ${applicant.birthName.suffix ?? ""}`
      : `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    fieldName: "Last Name",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of Birth",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        case GenderMarker.X:
          return "X";
        default:
          return "";
      }
    })(),
    fieldName: "Sex",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "Place of Birth City or town",
  }),
  (applicant) => ({
    text: fullName(applicant.fathersBirthName),
    fieldName: "Full Maiden Name First Middle Last of Parent 1",
  }),
  (applicant) => ({
    text: fullName(applicant.mothersBirthName),
    fieldName: "Full Maiden Name First Middle Last of Parent 2",
  }),
  () => ({
    text: "Child's Sex",
    fieldName: "List item 1 to be added, corrected or removed",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        case GenderMarker.X:
          return "X";
        default:
          return "";
      }
    })(),
    fieldName: "What is on the birth certificate now for item 1",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        default:
          return "";
      }
    })(),
    fieldName: "What should the birth certifcate say for item 1",
  }),
  () => ({
    check: true,
    fieldName:
      "We are I am requesting a new birth certificate be filed to incorporate the correction to the child's sex or remove the parent's race or color",
  }),
  () => ({
    check: true,
    fieldName: "Group1",
    choice:
      "Yes, I would like a certified copy of the corrected birth certificate",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? fullName(representativeName(applicant))
      : fullName(applicant.legalName),
    fieldName: "Printed Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Address",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "City",
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.name,
    fieldName: "State",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "Zip",
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.parentsAreOkay
        ? applicant.streetAddress
        : "",
    fieldName: "Address",
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.parentsAreOkay ? applicant.birthCity : "",
    fieldName: "City",
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.parentsAreOkay
        ? applicant.residentJurisdiction?.name
        : "",
    fieldName: "State",
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.parentsAreOkay ? applicant.zip : "",
    fieldName: "Zip",
  }),
];

/**
 * Correcting a Birth Certificate (Texas form VS-170.) (Name and Gender Marker)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const birthCertNameAndGenderCorrectionMap: Formfill[] = [
  () => ({
    check: true,
    fieldName: "Complete and sign this application See pages 4 and 5",
  }),
  () => ({
    check: true,
    fieldName:
      "Section 1 2 5 and 6 MUST be completed See pages 2 and 3 for how to complete Section 3 or 4",
  }),
  () => ({
    check: true,
    fieldName:
      "Everyone signing section 6 must sign before a notary public and ATTACH THEIR VALID",
  }),
  () => ({
    check: true,
    fieldName:
      "The application must be original Photocopies alterations strikethrough or write overs will not be",
  }),
  () => ({
    check: true,
    fieldName: "Submit the appropriate documentation See pages 2 and 3",
  }),
  () => ({
    check: true,
    fieldName: "Submit the appropriate fees See fee schedule below",
  }),
  () => ({
    check: true,
    fieldName:
      "New Birth Certificate based on child's sex or parent's race or color",
  }),
  () => ({
    text: "25.00",
    fieldName:
      "Total for New Birth Certificate based on child's sex or parent's race or color",
  }),
  () => ({
    check: true,
    fieldName: "Certified Corrected Birth Certificate",
  }),
  () => ({
    check: true,
    fieldName: "Check Box1",
  }),
  () => ({
    check: true,
    fieldName: "Check Box10",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? fullName(representativeName(applicant))
      : fullName(applicant.chosenName),
    fieldName: "Name First Middle Last",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "Address Mailing Address City State Zip",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email Address",
  }),
  (applicant) => ({
    text: phoneAreaCode(applicant.phone),
    fieldName: "Daytime telephone number area code",
  }),
  (applicant) => ({
    text: phoneStart(applicant.phone),
    fieldName: "Daytime telephone number first three digits",
  }),
  (applicant) => ({
    text: phoneEnd(applicant.phone),
    fieldName: "Daytime telephone number last four digits",
  }),
  (applicant) => ({
    check: !isMinor(applicant),
    fieldName: "Your relationship to Person named on the birth certificate",
    choice: "Choice1",
  }),
  (applicant) => ({
    check: isMinor(applicant) && applicant.parentsAreOkay,
    fieldName: "Your relationship to Person named on the birth certificate",
    choice: "Choice0",
  }),
  (applicant) => ({
    text: applicant.birthName.first
      ? applicant.birthName.first
      : applicant.legalName.first,
    fieldName: "Childs First Name",
  }),
  (applicant) => ({
    text: applicant.birthName.middle
      ? applicant.birthName.middle
      : applicant.legalName.middle,
    fieldName: "Middle Name",
  }),
  (applicant) => ({
    text: applicant.birthName.last
      ? `${applicant.birthName.last} ${applicant.birthName.suffix ?? ""}`
      : `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    fieldName: "Last Name",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of Birth",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        case GenderMarker.X:
          return "X";
        default:
          return "";
      }
    })(),
    fieldName: "Sex",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "Place of Birth City or town",
  }),
  (applicant) => ({
    text: fullName(applicant.fathersBirthName),
    fieldName: "Full Maiden Name First Middle Last of Parent 1",
  }),
  (applicant) => ({
    text: fullName(applicant.mothersBirthName),
    fieldName: "Full Maiden Name First Middle Last of Parent 2",
  }),
  () => ({
    text: "Child's Name",
    fieldName: "List item 1 to be added, corrected or removed",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    fieldName: "What is on the birth certificate now for item 1",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "What should the birth certifcate say for item 1",
  }),
  () => ({
    text: "Child's Sex",
    fieldName: "List item 2 to be added, corrected or removed",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        case GenderMarker.X:
          return "X";
        default:
          return "";
      }
    })(),
    fieldName: "What is on the birth certificate now for item 2",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        default:
          return "";
      }
    })(),
    fieldName: "What should the birth certifcate say for item 2",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "First Name",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "Middle Name_2",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "Last Name_2",
  }),
  () => ({
    check: true,
    fieldName:
      "We are I am requesting a new birth certificate be filed to incorporate the correction to the child's sex or remove the parent's race or color",
  }),
  () => ({
    check: true,
    fieldName: "Group1",
    choice:
      "Yes, I would like a certified copy of the corrected birth certificate",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? fullName(representativeName(applicant))
      : fullName(applicant.chosenName),
    fieldName: "Printed Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Address",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "City",
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.name,
    fieldName: "State",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "Zip",
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.parentsAreOkay
        ? applicant.streetAddress
        : "",
    fieldName: "Address",
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.parentsAreOkay ? applicant.birthCity : "",
    fieldName: "City",
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.parentsAreOkay
        ? applicant.residentJurisdiction?.name
        : "",
    fieldName: "State",
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.parentsAreOkay ? applicant.zip : "",
    fieldName: "Zip",
  }),
];


/**
 * Anderson County Public Filing Pro Se Information Sheet
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const andersonCountyMap: Formfill[] = [
  (applicant) => ({
    text: `In re ${fullName(representativeName(applicant))}`,
    loc: { page: 1, x: 150, y: 272 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 1, x: 405, y: 879 },
  }),
  (applicant) => ({
    text: `In re ${fullName(representativeName(applicant))}`,
    loc: { page: 1, x: 50, y: 937 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { page: 1, x: 405, y: 937 },
  }),
  () => ({ 
    text: new Date().toLocaleDateString(), 
    loc: { page: 1, x: 50, y: 997 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { page: 1, x: 405, y: 997 },
  }),
];

/**
 * Fannin County Public Filing Pro Se Information Sheet
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const fanninCountyMap: Formfill[] = [
  (applicant) => ({
    text: `In re ${fullName(representativeName(applicant))}`,
    loc: { x: 150, y: 247 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    loc: { x: 450, y: 932 },
  }),
  (applicant) => ({
    text: `In re ${fullName(representativeName(applicant))}`,
    loc: { x: 50, y: 978 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { x: 405, y: 978 },
  }),
];