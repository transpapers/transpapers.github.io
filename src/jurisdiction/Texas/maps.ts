import {
  formatDate,
  fullName,
  isMinor,
  representativeName,
  abbreviateJurisdiction,
  numericalAge,
  nameInitials,
  phoneAreaCode,
  phoneStart,
  phoneEnd,
} from "../../lib/util";

import { GenderMarker, DateFormatPart as DATE, NameFormatPart as FML } from "../../types/types";
import { Formfill } from "../../types/formfill";

// Maps appear in the order they will be collated.
// State forms come first, in the order they should be filed;
// then state documents (which need no map information);

/**
 * Petition to Change the Name of an Adult (Texas form FM-NCA-100.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const nameChangeAdultMap: Formfill[] = [
  {
    check: () => true,
    field: "County Court at Law",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Print current full legal name of person asking for name change",
  },
  {
    text: (applicant) => applicant.residentLocality,
    field: "County",
  },
  {
    text: (applicant) => applicant.legalName?.first ?? "",
    field: "First",
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? "",
    field: "Middle",
  },
  {
    text: (applicant) => applicant.legalName?.last ?? "",
    field: "Last",
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    field: "First_2",
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    field: "Middle_2",
  },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    field: "Last_2",
  },
  {
    text: (applicant) => applicant.reasonForNameChange,
    field: "The reason I want to change my name is 1",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Text2",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "City",
  },
  {
    text: (applicant) => applicant.residentLocality,
    field: "County_2",
  },
  {
    text: (applicant) => applicant.residentJurisdiction,
    field: "State",
  },
  {
    text: (applicant) => applicant.zip,
    field: "ZIP code",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Social Security Number",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "City_2",
  },
  {
    text: (applicant) => applicant.birthJurisdiction,
    field: "State_2",
  },
  {
    text: (applicant) => 
      abbreviateJurisdiction(applicant.birthJurisdiction ?? "") 
      ? "USA" : "",
    field: "Country",
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.M,
    field: "undefined",
    select: "Male",
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.F,
    field: "undefined",
    select: "Female",
  },
  {
    text: (applicant) => fullName(applicant.birthName)
        ? fullName(applicant.birthName) : "",
    field: "h",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "Have you ever been charged with a Class A or B misdemeanor or a felony",
    select: "No",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "The court may order your name changed if you were pardoned or at least two years have passed since",
    select: "No_2",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "If yes  You must attach proof that you notified the appropriate local law enforcement authority of your proposed",
    select: "No_3",
  },
  { 
    text: () => new Date().toLocaleDateString(), 
    field: "I ask the Court to make an Order to change my name and any other Orders I may be entitled to",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 2, x: 115, y: 602 },
  },
  {
    text: (applicant) => applicant.phone,
    field: "Date",
  },
  {
    text: (applicant) => applicant.email,
    field: "City_3",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "crime to make a false unsworn declaration under penalty of perjury in Texas See Texas Penal Code 3702",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "My current legal name is",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "my date of birth is",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "and my address is",
  },
  {
    text: (applicant) => 
      abbreviateJurisdiction(applicant.residentJurisdiction ?? ""),
    field: "State_4",
  },
  {
    text: (applicant) => 
      abbreviateJurisdiction(applicant.residentJurisdiction ?? "") 
      ? "USA" : "",
    field: "Country_2",
  },
  {
    text: (applicant) => applicant.residentLocality,
    field: "I declare under penalty of perjury that the foregoing is true and correct",
  },
  {
    text: (applicant) => applicant.residentJurisdiction,
    field: "undefined_3",
  },
  {
    check: () => true,
    field: "A legible and complete set of your fingerprints on a fingerprint card in a form acceptable to the Texas",
  },
];

/**
 * Order Changing the Name of an Adult (Texas form FM-NCA-200.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const nameChangeOrderAdultMap: Formfill[] = [
  {
    check: () => true,
    field: "County Court at Law",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Print current full legal name of person asking for name change",
  },
  {
    text: (applicant) => applicant.residentLocality,
    field: "County",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "The Court finds that Petitioners personal information is as follows",
  },
  {
    text: (applicant) => fullName(applicant.birthName)
        ? fullName(applicant.birthName) : "",
    field: "b",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Street address",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "City",
  },
  {
    text: (applicant) => applicant.residentLocality,
    field: "County_2",
  },
  {
    text: (applicant) => 
      abbreviateJurisdiction(applicant.residentJurisdiction ?? ""),
    field: "State",
  },
  {
    text: (applicant) => applicant.zip,
    field: "ZIP code",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Date of birth",
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { page: 1, x: 220, y: 361 },
  },
  {
    text: (applicant) => applicant.birthJurisdiction,
    loc: { page: 1, x: 540, y: 361 },
  },
  {
    text: (applicant) => 
      abbreviateJurisdiction(applicant.residentJurisdiction ?? "") 
      ? "USA" : "",
    loc: { page: 1, x: 695, y: 361 },
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.M,
    field: "County_3",
    select: "Male",
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.F,
    field: "County_3",
    select: "Female",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "does not have an FBI number or SID number",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "has not been charged with a class A or B misdemeanor or felony",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "has not been convicted of a felony",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "is not required to register as a sex offender",
  },
  {
    text: (applicant) => applicant.legalName?.first ?? "",
    field: "First",
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? "",
    field: "Middle",
  },
  {
    text: (applicant) => applicant.legalName?.last ?? "",
    field: "Last",
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    field: "First_2",
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    field: "Middle_2",
  },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    field: "Last_2",
  },
  {
    check: (applicant) => applicant.birthJurisdiction === "Texas",
    field: "Check box if applicable The name on the Petitioners birth certificate is",
  },
  {
    text: (applicant) => {
      switch (applicant.birthJurisdiction === "Texas") {
        case true:
          return applicant.birthName?.first ?? ""
          ? applicant.birthName?.first ?? ""
          : applicant.legalName?.first ?? "";
        case false:
          return "";
        default:
          return "";
      }
    },
    field: "First_3",
  },
  {
    text: (applicant) => {
      switch (applicant.birthJurisdiction === "Texas") {
        case true:
          return applicant.birthName?.middle ?? ""
          ? applicant.birthName?.middle ?? ""
          : applicant.legalName?.middle ?? "";
        case false:
          return "";
        default:
          return "";
      }
    },
    field: "Middle_3",
  },
  {
    text: (applicant) => {
      switch (applicant.birthJurisdiction === "Texas") {
        case true:
          return applicant.birthName?.last ?? ""
          ? applicant.birthName?.last ?? ""
          : applicant.legalName?.last ?? "";
        case false:
          return "";
        default:
          return "";
      }
    },
    field: "Last_3",
  },
  {
    text: (applicant) => applicant.birthJurisdiction === "Texas" 
      ? applicant.chosenName?.first ?? "" : "",
    field: "First_4",
  },
  {
    text: (applicant) => applicant.birthJurisdiction === "Texas"
      ? applicant.chosenName?.middle ?? "" : "",
    field: "Middle_4",
  },
  {
    text: (applicant) => applicant.birthJurisdiction === "Texas"
      ? applicant.chosenName?.last ?? "" : "",
    field: "Last_4",
  },
];

/**
 * Petition to Change the Name of a Child or Children (Texas form FM-NCC1-100.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const nameChangeMinorBothParentsMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "1",
  },
  {
    check: () => true,
    field: "County Court at Law",
  },
  {
    text: (applicant) => applicant.residentLocality,
    field: "County Texas",
  },
  {
    text: (applicant) =>
      `${applicant.representativeName?.first ?? ""} ${applicant.representativeName?.middle ?? ""} ${applicant.representativeName?.last ?? ""}`,
    field: "The Petitioner is",
  },
  {
    text: (applicant) => applicant.representativeName?.suffix ?? "",
    field: "undefined",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Current Name of Child 1",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Childs Current name",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${abbreviateJurisdiction(applicant.residentJurisdiction ?? "")}, ${applicant.zip ?? ""}`,
    field: "Home Address",
  },
  {
    text: (applicant) => applicant.residentLocality,
    field: "County",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Birth date",
  },
  {
    text: (applicant) => 
      abbreviateJurisdiction(applicant.birthJurisdiction ?? "") 
      ? `${applicant.birthCity ?? ""}   ${applicant.birthJurisdiction ?? ""}   USA` 
      : applicant.birthCity,
    field: "Country",
  },
  {
    check: (applicant) => numericalAge(applicant.birthdate ?? "") < 10,
    field: "Child is younger than 10 years old Consent is not required",
  },
  {
    check: (applicant) => numericalAge(applicant.birthdate ?? "") > 9,
    field: "Child is 10 years old or older and has consented in writing to this name change",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "The child is not required to register as a sex offender",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "There are no court orders regarding the child",
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    field: "First",
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    field: "Middle",
  },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    field: "Last",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "My date of birth is",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
    field: "undefined_12",
  },
  {
    text: (applicant) => applicant.residentLocality,
    field: "County_2",
  },
  {
    text: (applicant) => applicant.residentJurisdiction,
    field: "undefined_14",
  },
  {
    text: (applicant) => applicant.parentsAreOkay ?
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}` : "",
    field: "undefined_16",
  },
  {
    text: (applicant) => applicant.parentsAreOkay ?
      applicant.residentLocality : "",
    field: "County_3",
  },
  {
    text: (applicant) => applicant.parentsAreOkay ?
      applicant.residentJurisdiction : "",
    field: "undefined_18",
  },
];

/**
 * Order Changing the Name of a Child [Set A] (Texas form FM-NCC1-200.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const nameChangeMinorBothParentsOrderMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 105, y: 188 },
  },
  {
    text: () => "X",
    loc: { x: 569, y: 178 },
  },
  {
    text: (applicant) => applicant.residentLocality,
    loc: { x: 450, y: 210 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { x: 265, y: 442 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 1, x: 270, y: 154 },
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${abbreviateJurisdiction(applicant.residentJurisdiction ?? "")}, ${applicant.zip ?? ""}`,
    loc: { page: 1, x: 230, y: 190 },
  },
  {
    text: (applicant) => applicant.residentLocality,
    loc: { page: 1, x: 630, y: 190 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 1, x: 195, y: 240 },
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { page: 1, x: 455, y: 240 },
  },
  {
    text: (applicant) => applicant.birthJurisdiction,
    loc: { page: 1, x: 560, y: 240 },
  },
  {
    text: (applicant) => 
      applicant.age && applicant.age < 10 ? "X" : "",
    loc: { page: 1, x: 128, y: 295 },
  },
  {
    text: (applicant) => isMinor(applicant) &&
      applicant.age && applicant.age > 9 ? "X" : "",
    loc: { page: 1, x: 128, y: 317 },
  },
  {
    text: (applicant) => !applicant.hasCriminalRecord ? "X" : "",
    loc: { page: 1, x: 128, y: 360 },
  },
  {
    text: (applicant) => applicant.parentsAreOkay? "X" : "",
    loc: { page: 1, x: 128, y: 453 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 1, x: 200, y: 650 },
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    loc: { page: 1, x: 200, y: 690 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { page: 2, x: 520, y: 163 },
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${abbreviateJurisdiction(applicant.residentJurisdiction ?? "")}, ${applicant.zip ?? ""}`,
    loc: { page: 2, x: 215, y: 208 },
  },
  {
    text: (applicant) => applicant.email,
    loc: { page: 2, x: 205, y: 257 },
  },
  {
    text: (applicant) => applicant.parentsAreOkay ?
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${abbreviateJurisdiction(applicant.residentJurisdiction ?? "")}, ${applicant.zip ?? ""}` : "",
    loc: { page: 2, x: 215, y: 394 },
  },
];

/**
 * Petition to Change the Name of a Child [Set C] (Texas form FM-NCC3-100.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const nameChangeMinorSingleParentMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 105, y: 188 },
  },
  {
    text: () => "X",
    loc: { x: 569, y: 178 },
  },
  {
    text: (applicant) => applicant.residentLocality,
    loc: { x: 450, y: 210 },
  },
  {
    text: (applicant) => applicant.representativeName?.first ?? "",
    loc: { x: 240, y: 380 },
  },
  {
    text: (applicant) => applicant.representativeName?.middle ?? "",
    loc: { x: 425, y: 380 },
  },
  {
    text: (applicant) => 
      `${applicant.representativeName?.last ?? ""} ${applicant.representativeName?.suffix ?? ""}`,
    loc: { x: 600, y: 380 },
  },
  {
    text: () => "X",
    loc: { x: 103, y: 614 },
  },
  {
    text: (applicant) => applicant.legalName?.first ?? "",
    loc: { x: 270, y: 778 },
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? "",
    loc: { x: 430, y: 778 },
  },
  {
    text: (applicant) => 
      `${applicant.legalName?.last ?? ""} ${applicant.legalName?.suffix ?? ""}`,
    loc: { x: 610, y: 778 },
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${abbreviateJurisdiction(applicant.residentJurisdiction ?? "")}, ${applicant.zip ?? ""}`,
    loc: { x: 230, y: 815 },
  },
  {
    text: (applicant) => applicant.residentLocality,
    loc: { x: 625, y: 815 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { x: 200, y: 882 },
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { x: 220, y: 917 },
  },
  {
    text: (applicant) => applicant.birthJurisdiction,
    loc: { x: 430, y: 917 },
  },
  {
    text: (applicant) => 
      applicant.age && applicant.age < 10 ? "X" : "",
    loc: { x: 128, y: 966 },
  },
  {
    text: (applicant) => isMinor(applicant) &&
      applicant.age && applicant.age > 9 ? "X" : "",
    loc: { page: 1, x: 128, y: 95 },
  },
  {
    text: (applicant) => !applicant.hasCriminalRecord ? "X" : "",
    loc: { page: 1, x: 128, y: 140 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 1, x: 130, y: 412 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 1, x: 375, y: 412 },
  },
  {
    text: (applicant) => 
      `${applicant.chosenName?.last ?? ""} ${applicant.chosenName?.suffix ?? ""}`,
    loc: { page: 1, x: 580, y: 412 },
  },
  { 
    text: () => new Date().toLocaleDateString(), 
    loc: { page: 1, x: 500, y: 658 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { page: 1, x: 105, y: 700 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { page: 1, x: 500, y: 700 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 1, x: 105, y: 736 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 1, x: 440, y: 736 },
  },
  {
    text: (applicant) => applicant.residentJurisdiction,
    loc: { page: 1, x: 595, y: 736 },
  },
  {
    text: (applicant) => applicant.zip,
    loc: { page: 1, x: 695, y: 736 },
  },
  {
    text: (applicant) => applicant.email,
    loc: { page: 1, x: 210, y: 780 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { page: 2, x: 185, y: 130 },
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${abbreviateJurisdiction(applicant.residentJurisdiction ?? "")}, ${applicant.zip ?? ""}`,
    loc: { page: 2, x: 205, y: 162 },
  },
  {
    text: (applicant) => applicant.email,
    loc: { page: 2, x: 235, y: 194 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { page: 2, x: 600, y: 194 },
  },
  {
    text: (applicant) => applicant.residentLocality,
    loc: { page: 2, x: 560, y: 325 },
  },
  {
    text: (applicant) => applicant.residentJurisdiction,
    loc: { page: 2, x: 170, y: 374 },
  },
];

/**
 * Order Changing the Name of a Child [Set C] (Texas form FM-NCC3-200.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const nameChangeMinorSingleParentOrderMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 105, y: 172 },
  },
  {
    text: () => "X",
    loc: { x: 569, y: 170 },
  },
  {
    text: (applicant) => applicant.residentLocality,
    loc: { x: 450, y: 194 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { x: 250, y: 379 },
  },
  {
    text: () => "X",
    loc: { x: 103, y: 490 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 320, y: 882 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { x: 295, y: 964 },
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { page: 1, x: 315, y: 98 },
  },
  {
    text: (applicant) => applicant.birthJurisdiction,
    loc: { page: 1, x: 505, y: 98 },
  },
  {
    text: (applicant) => 
      applicant.age && applicant.age < 10 ? "X" : "",
    loc: { page: 1, x: 128, y: 230 },
  },
  {
    text: (applicant) => isMinor(applicant) &&
      applicant.age && applicant.age > 9 ? "X" : "",
    loc: { page: 1, x: 128, y: 256 },
  },
  {
    text: (applicant) => !applicant.hasCriminalRecord ? "X" : "",
    loc: { page: 1, x: 128, y: 318 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 1, x: 220, y: 634 },
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    loc: { page: 1, x: 210, y: 680 },
  },
];

/**
 * Petition to Change the Name of a Child [Set E] (Texas form FM-NCC5-100.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const nameChangeMinorGuardianMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 105, y: 188 },
  },
  {
    text: () => "X",
    loc: { x: 569, y: 178 },
  },
  {
    text: (applicant) => applicant.residentLocality,
    loc: { x: 450, y: 210 },
  },
  {
    text: (applicant) => applicant.representativeName?.first ?? "",
    loc: { x: 240, y: 388 },
  },
  {
    text: (applicant) => applicant.representativeName?.middle ?? "",
    loc: { x: 425, y: 388 },
  },
  {
    text: (applicant) => 
      `${applicant.representativeName?.last ?? ""} ${applicant.representativeName?.suffix ?? ""}`,
    loc: { x: 600, y: 388 },
  },
  {
    text: (applicant) => applicant.legalName?.first ?? "",
    loc: { page: 2, x: 270, y: 776 },
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? "",
    loc: { page: 2, x: 430, y: 776 },
  },
  {
    text: (applicant) => 
      `${applicant.legalName?.last ?? ""} ${applicant.legalName?.suffix ?? ""}`,
    loc: { page: 2, x: 610, y: 776 },
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${abbreviateJurisdiction(applicant.residentJurisdiction ?? "")}, ${applicant.zip ?? ""}`,
    loc: { page: 2, x: 230, y: 812 },
  },
  {
    text: (applicant) => applicant.residentLocality,
    loc: { page: 2, x: 630, y: 812 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 2, x: 200, y: 878 },
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { page: 2, x: 220, y: 914 },
  },
  {
    text: (applicant) => applicant.birthJurisdiction,
    loc: { page: 2, x: 430, y: 914 },
  },
  {
    text: (applicant) => 
      applicant.age && applicant.age < 10 ? "X" : "",
    loc: { page: 2, x: 128, y: 963 },
  },
  {
    text: (applicant) => isMinor(applicant) &&
      applicant.age && applicant.age > 9 ? "X" : "",
    loc: { page: 3, x: 128, y: 95 },
  },
  {
    text: (applicant) => !applicant.hasCriminalRecord ? "X" : "",
    loc: { page: 3, x: 128, y: 140 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 3, x: 130, y: 412 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 3, x: 375, y: 412 },
  },
  {
    text: (applicant) => 
      `${applicant.chosenName?.last ?? ""} ${applicant.chosenName?.suffix ?? ""}`,
    loc: { page: 3, x: 580, y: 412 },
  },
  { 
    text: () => new Date().toLocaleDateString(), 
    loc: { page: 3, x: 500, y: 658 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { page: 3, x: 105, y: 700 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { page: 3, x: 500, y: 700 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 3, x: 105, y: 736 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 3, x: 440, y: 736 },
  },
  {
    text: (applicant) => applicant.residentJurisdiction,
    loc: { page: 3, x: 595, y: 736 },
  },
  {
    text: (applicant) => applicant.zip,
    loc: { page: 3, x: 695, y: 736 },
  },
  {
    text: (applicant) => applicant.email,
    loc: { page: 3, x: 210, y: 780 },
  },
];

/**
 * Order Changing the Name of a Child [Set E] (Texas form FM-NCC5-200.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const nameChangeMinorGuardianOrderMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 105, y: 188 },
  },
  {
    text: () => "X",
    loc: { x: 569, y: 178 },
  },
  {
    text: (applicant) => applicant.residentLocality,
    loc: { x: 450, y: 210 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { x: 265, y: 442 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 2, x: 270, y: 153 },
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${abbreviateJurisdiction(applicant.residentJurisdiction ?? "")}, ${applicant.zip ?? ""}`,
    loc: { page: 2, x: 230, y: 190 },
  },
  {
    text: (applicant) => applicant.residentLocality,
    loc: { page: 2, x: 630, y: 190 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 2, x: 195, y: 240 },
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { page: 2, x: 455, y: 240 },
  },
  {
    text: (applicant) => applicant.birthJurisdiction,
    loc: { page: 2, x: 560, y: 240 },
  },
  {
    text: (applicant) => 
      applicant.age && applicant.age < 10 ? "X" : "",
    loc: { page: 2, x: 128, y: 294 },
  },
  {
    text: (applicant) => isMinor(applicant) &&
      applicant.age && applicant.age > 9 ? "X" : "",
    loc: { page: 2, x: 128, y: 316 },
  },
  {
    text: (applicant) => !applicant.hasCriminalRecord ? "X" : "",
    loc: { page: 2, x: 128, y: 360 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 2, x: 200, y: 650 },
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    loc: { page: 2, x: 200, y: 690 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { page: 3, x: 520, y: 163 },
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${abbreviateJurisdiction(applicant.residentJurisdiction ?? "")}, ${applicant.zip ?? ""}`,
    loc: { page: 3, x: 215, y: 208 },
  },
  {
    text: (applicant) => applicant.email,
    loc: { page: 3, x: 205, y: 257 },
  },
];

/**
 * Child's Consent to Name Change (Texas form FM-NCC1-113.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const nameChangeMinorsConsentMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 105, y: 180 },
  },
  {
    text: () => "X",
    loc: { x: 569, y: 170 },
  },
  {
    text: (applicant) => applicant.residentLocality,
    loc: { x: 450, y: 200 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 235, y: 361 },
  },
  {
    text: (applicant) => applicant.age?.toString(),
    loc: { x: 215, y: 427 },
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    loc: { x: 145, y: 504 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 360, y: 582 },
  },
];

/**
 * Statement of Inability to Afford Payment of Court Costs or an Appeal Bond (Texas form CB-CFFW-100.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const feeWaiverMap: Formfill[] = [
  {
    text: (applicant) => 
    `In re ${fullName(representativeName(applicant))}`,
    field: "Fill Blank 1",
  },
  {
    text: (applicant) => applicant.residentLocality,
    field: "County / Condado",
  },
  {
    check: () => true,
    field: "Check.CountyatLaw",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "My full legal name is / Mi nombre legal completo es",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "My date of birth / Mi fecha de nacimiento es",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${abbreviateJurisdiction(applicant.residentJurisdiction ?? "")}, ${applicant.zip ?? ""}`,
    field: "My address is / Mi dirección es 2",
  },
  {
    text: (applicant) => applicant.phone,
    field: "My phone number  Mi número telefónico",
  },
  {
    text: (applicant) => applicant.email,
    field: "My email I check often  Mi correo electrónico que reviso con frecuencia",
  },
  {
    text: (applicant) => isMinor(applicant) ?
      nameInitials(applicant.legalName, {
        format: [FML.FIRST, FML.MIDDLE, FML.LAST]
      }) : "",
    field: "Name NombreRow1",
  },
  {
    text: (applicant) => isMinor(applicant) ?
      applicant.age?.toString() : "",
    field: "Age EdadRow1",
  },
  {
    text: (applicant) => isMinor(applicant) ?
      "Child" : "",
    field: "Relationship to me Parentesco ConmigoRow1",
  },
  {
    check: () => true,
    field: "Qualification",
    select: "Choice3",
  },
  {
    check: () => true,
    field: "Type of application",
    select: "Choice1",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "My name is  Mi nombre es",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH],
        separator: "/",
      }),
    field: "Month / Mes",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.DAY],
        separator: "/",
      }),
    field: "Day / Día",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.YEAR],
        separator: "/",
      }),
    field: "Year / Año",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${abbreviateJurisdiction(applicant.residentJurisdiction ?? "")}, ${applicant.zip ?? ""}`,
    field: "My address is  Mi domicilio es",
  },
  {
    text: (applicant) =>
      `${applicant.residentLocality ?? ""}, ${applicant.residentJurisdiction ?? ""}`,
    field: "County state",
  },
];

/**
 * Civil Case Information Sheet (Texas form unnumbered.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const caseInformationMap: Formfill[] = [
  {
    text: (applicant) => 
    `In re ${fullName(representativeName(applicant))}`,
    field: "STYLED",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Name",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Address",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Telephone",
  },
  {
    text: (applicant) =>
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
    field: "CityStateZip",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "PlaintiffsPetitioners 1",
  },
  {
    check: () => true,
    field: "Pro Se PlaintiffPetitioner",
  },
  {
    check: () => true,
    field: "Name Change",
  },
  {
    check: () => true,
    field: "Declaratory Judgment",
  },
];

/**
 * Information on Suit Affecting the Family Relationship (Excluding Adoptions) (Texas form VS-165.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const nameChangeMinorFamilyInfoMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality,
    field: "1a COUNTY",
  },
  {
    check: () => true,
    field: "Change in the name of the child (Section 1 and 3)",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "19a CHILD CURRENT NAME FIRST MIDDLE LAST SUFFIX",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "19b DATE OF BIRTH mmddyyyy",
  },
  {
    text: (applicant) => {
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
    },
    field: "19c SEX",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "19d BIRTHPLACE CITY COUNTY AND STATE",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "19e PRIOR NAME OF CHILD FIRST MIDDLE LAST SUFFIX  IF APPLICABLE",
  },
];

/**
 * Texas Driver License or Identification Card Application (Texas form DL-14A.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const primaryIDMap: Formfill[] = [
  {
    text: (applicant) => applicant.isChangingLegalName
    ? applicant.chosenName?.last ?? ""
    : applicant.legalName?.last ?? "",
    field: "Last Name",
  },
  {
    text: (applicant) => applicant.isChangingLegalName
    ? applicant.chosenName?.first ?? ""
    : applicant.legalName?.first ?? "",
    field: "First Name",
  },
  {
    text: (applicant) => applicant.isChangingLegalName
    ? applicant.chosenName?.middle ?? ""
    : applicant.legalName?.middle ?? "",
    field: "Middle Name",
  },
  {
    text: (applicant) => applicant.isChangingLegalName
    ? applicant.chosenName?.suffix ?? ""
    : applicant.legalName?.suffix ?? "",
    field: "Suffix",
  },
  {
    text: (applicant) => applicant.birthName?.last
    ? applicant.birthName?.last ?? ""
    : applicant.legalName?.last ?? "",
    field: "Last Name",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "DOB",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "Place of birth City",
  },
  {
    text: (applicant) => 
      abbreviateJurisdiction(applicant.birthJurisdiction ?? ""),
    field: "State",
  },
  {
    text: (applicant) => 
      abbreviateJurisdiction(applicant.birthJurisdiction ?? "") 
      ? "USA" : "",
    field: "Country",
  },
  {
    text: (applicant) => applicant.fathersBirthName?.last ?? "",
    field: "Fathers Last Name",
  },
  {
    text: (applicant) => applicant.mothersBirthName?.last ?? "",
    field: "Mothers Maiden Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Residence Address",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "City",
  },
  {
    text: (applicant) => 
      abbreviateJurisdiction(applicant.residentJurisdiction ?? ""),
    field: "State_2",
  },
  {
    text: (applicant) => applicant.zip,
    field: "Zip Code",
  },
  {
    text: (applicant) => 
      abbreviateJurisdiction(applicant.residentJurisdiction ?? "") 
      ? "USA" : "",
    field: "County_2",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Cellular Phone",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email",
  },
];

/**
 * Correcting a Birth Certificate (Texas form VS-170.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const birthCertNameCorrectionMap: Formfill[] = [
  {
    check: () => true,
    field: "Complete and sign this application See pages 4 and 5",
  },
  {
    check: () => true,
    field: "Section 1 2 5 and 6 MUST be completed See pages 2 and 3 for how to complete Section 3 or 4",
  },
  {
    check: () => true,
    field: "Everyone signing section 6 must sign before a notary public and ATTACH THEIR VALID",
  },
  {
    check: () => true,
    field: "The application must be original Photocopies alterations strikethrough or write overs will not be",
  },
  {
    check: () => true,
    field: "Submit the appropriate documentation See pages 2 and 3",
  },
  {
    check: () => true,
    field: "Submit the appropriate fees See fee schedule below",
  },
  {
    check: () => true,
    field: "Correction to Birth Certificate",
  },
  {
    text: () => "15.00",
    field: "Total for correction to birth certificate",
  },
  {
    check: () => true,
    field: "Certified Corrected Birth Certificate",
  },
  {
    check: () => true,
    field: "Check Box10",
  },
  {
    text: (applicant) => isMinor(applicant) 
      ? fullName(representativeName(applicant)) 
      : fullName(applicant.chosenName),
    field: "Name First Middle Last",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${abbreviateJurisdiction(applicant.residentJurisdiction ?? "")}, ${applicant.zip ?? ""}`,
    field: "Address Mailing Address City State Zip",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email Address",
  },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    field: "Daytime telephone number area code",
  },
  {
    text: (applicant) => phoneStart(applicant.phone),
    field: "Daytime telephone number first three digits",
  },
  {
    text: (applicant) => phoneEnd(applicant.phone),
    field: "Daytime telephone number last four digits",
  },
  {
    check: (applicant) => !isMinor(applicant),
    field: "Your relationship to Person named on the birth certificate",
    select: "Choice1",
  },
  {
    check: (applicant) => isMinor(applicant) && applicant.parentsAreOkay,
    field: "Your relationship to Person named on the birth certificate",
    select: "Choice0",
  },
  {
    text: (applicant) => applicant.birthName?.first 
      ? applicant.birthName?.first ?? "" 
      : applicant.legalName?.first ?? "",
    field: "Childs First Name",
  },
  {
    text: (applicant) => applicant.birthName?.middle 
      ? applicant.birthName?.middle ?? "" 
      : applicant.legalName?.middle ?? "",
    field: "Middle Name",
  },
  {
    text: (applicant) => applicant.birthName?.last
      ? `${applicant.birthName?.last ?? ""} ${applicant.birthName?.suffix ?? ""}`
      : `${applicant.legalName?.last ?? ""} ${applicant.legalName?.suffix ?? ""}`,
    field: "Last Name",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Date of Birth",
  },
  {
    text: (applicant) => {
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
    },
    field: "Sex",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "Place of Birth City or town",
  },
  {
    text: (applicant) => fullName(applicant.fathersBirthName),
    field: "Full Maiden Name First Middle Last of Parent 1",
  },
  {
    text: (applicant) => fullName(applicant.mothersBirthName),
    field: "Full Maiden Name First Middle Last of Parent 2",
  },
  {
    text: () => "Child's Name",
    field: "List item 1 to be added, corrected or removed",
  },
  {
    text: (applicant) => fullName(applicant.birthName) 
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    field: "What is on the birth certificate now for item 1",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "What should the birth certifcate say for item 1",
  },
  {
    text: (applicant) => applicant.chosenName?.first,
    field: "First Name",
  },
  {
    text: (applicant) => applicant.chosenName?.middle,
    field: "Middle Name_2",
  },
  {
    text: (applicant) => applicant.chosenName?.last,
    field: "Last Name_2",
  },
  {
    check: () => true,
    field: "Group1",
    select: "Yes, I would like a certified copy of the corrected birth certificate",
  },
  {
    text: (applicant) => isMinor(applicant) 
      ? fullName(representativeName(applicant)) 
      : fullName(applicant.chosenName),
    field: "Printed Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Address",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "City",
  },
  {
    text: (applicant) => applicant.residentJurisdiction,
    field: "State",
  },
  {
    text: (applicant) => applicant.zip,
    field: "Zip",
  },
  {
    text: (applicant) => 
      isMinor(applicant) && applicant.parentsAreOkay
      ? applicant.streetAddress : "",
    field: "Address",
  },
  {
    text: (applicant) =>
      isMinor(applicant) && applicant.parentsAreOkay
      ? applicant.birthCity : "",
    field: "City",
  },
  {
    text: (applicant) =>
      isMinor(applicant) && applicant.parentsAreOkay
      ? applicant.residentJurisdiction : "",
    field: "State",
  },
  {
    text: (applicant) =>
      isMinor(applicant) && applicant.parentsAreOkay
      ? applicant.zip : "",
    field: "Zip",
  },
];

/**
 * Correcting a Birth Certificate (Texas form VS-170.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const birthCertGenderCorrectionMap: Formfill[] = [
  {
    check: () => true,
    field: "Complete and sign this application See pages 4 and 5",
  },
  {
    check: () => true,
    field: "Section 1 2 5 and 6 MUST be completed See pages 2 and 3 for how to complete Section 3 or 4",
  },
  {
    check: () => true,
    field: "Everyone signing section 6 must sign before a notary public and ATTACH THEIR VALID",
  },
  {
    check: () => true,
    field: "The application must be original Photocopies alterations strikethrough or write overs will not be",
  },
  {
    check: () => true,
    field: "Submit the appropriate documentation See pages 2 and 3",
  },
  {
    check: () => true,
    field: "Submit the appropriate fees See fee schedule below",
  },
  {
    check: () => true,
    field: "New Birth Certificate based on child's sex or parent's race or color",
  },
  {
    text: () => "25.00",
    field: "Total for New Birth Certificate based on child's sex or parent's race or color",
  },
  {
    check: () => true,
    field: "Certified Corrected Birth Certificate",
  },
  {
    check: () => true,
    field: "Check Box1",
  },
  {
    text: (applicant) => isMinor(applicant) 
      ? fullName(representativeName(applicant)) 
      : fullName(applicant.legalName),
    field: "Name First Middle Last",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${abbreviateJurisdiction(applicant.residentJurisdiction ?? "")}, ${applicant.zip ?? ""}`,
    field: "Address Mailing Address City State Zip",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email Address",
  },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    field: "Daytime telephone number area code",
  },
  {
    text: (applicant) => phoneStart(applicant.phone),
    field: "Daytime telephone number first three digits",
  },
  {
    text: (applicant) => phoneEnd(applicant.phone),
    field: "Daytime telephone number last four digits",
  },
  {
    check: (applicant) => !isMinor(applicant),
    field: "Your relationship to Person named on the birth certificate",
    select: "Choice1",
  },
  {
    check: (applicant) => isMinor(applicant) && applicant.parentsAreOkay,
    field: "Your relationship to Person named on the birth certificate",
    select: "Choice0",
  },
  {
    text: (applicant) => applicant.birthName?.first 
      ? applicant.birthName?.first ?? "" 
      : applicant.legalName?.first ?? "",
    field: "Childs First Name",
  },
  {
    text: (applicant) => applicant.birthName?.middle 
      ? applicant.birthName?.middle ?? "" 
      : applicant.legalName?.middle ?? "",
    field: "Middle Name",
  },
  {
    text: (applicant) => applicant.birthName?.last
      ? `${applicant.birthName?.last ?? ""} ${applicant.birthName?.suffix ?? ""}`
      : `${applicant.legalName?.last ?? ""} ${applicant.legalName?.suffix ?? ""}`,
    field: "Last Name",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Date of Birth",
  },
  {
    text: (applicant) => {
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
    },
    field: "Sex",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "Place of Birth City or town",
  },
  {
    text: (applicant) => fullName(applicant.fathersBirthName),
    field: "Full Maiden Name First Middle Last of Parent 1",
  },
  {
    text: (applicant) => fullName(applicant.mothersBirthName),
    field: "Full Maiden Name First Middle Last of Parent 2",
  },
  {
    text: () => "Child's Sex",
    field: "List item 1 to be added, corrected or removed",
  },
  {
    text: (applicant) => {
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
    },
    field: "What is on the birth certificate now for item 1",
  },
  {
    text: (applicant) => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        default:
          return "";
      }
    },
    field: "What should the birth certifcate say for item 1",
  },
  {
    check: () => true,
    field: "We are I am requesting a new birth certificate be filed to incorporate the correction to the child's sex or remove the parent's race or color",
  },
  {
    check: () => true,
    field: "Group1",
    select: "Yes, I would like a certified copy of the corrected birth certificate",
  },
  {
    text: (applicant) => isMinor(applicant) 
      ? fullName(representativeName(applicant)) 
      : fullName(applicant.legalName),
    field: "Printed Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Address",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "City",
  },
  {
    text: (applicant) => applicant.residentJurisdiction,
    field: "State",
  },
  {
    text: (applicant) => applicant.zip,
    field: "Zip",
  },
  {
    text: (applicant) => 
      isMinor(applicant) && applicant.parentsAreOkay
      ? applicant.streetAddress : "",
    field: "Address",
  },
  {
    text: (applicant) =>
      isMinor(applicant) && applicant.parentsAreOkay
      ? applicant.birthCity : "",
    field: "City",
  },
  {
    text: (applicant) =>
      isMinor(applicant) && applicant.parentsAreOkay
      ? applicant.residentJurisdiction : "",
    field: "State",
  },
  {
    text: (applicant) =>
      isMinor(applicant) && applicant.parentsAreOkay
      ? applicant.zip : "",
    field: "Zip",
  },
];

/**
 * Correcting a Birth Certificate (Texas form VS-170.)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const birthCertNameAndGenderCorrectionMap: Formfill[] = [
  {
    check: () => true,
    field: "Complete and sign this application See pages 4 and 5",
  },
  {
    check: () => true,
    field: "Section 1 2 5 and 6 MUST be completed See pages 2 and 3 for how to complete Section 3 or 4",
  },
  {
    check: () => true,
    field: "Everyone signing section 6 must sign before a notary public and ATTACH THEIR VALID",
  },
  {
    check: () => true,
    field: "The application must be original Photocopies alterations strikethrough or write overs will not be",
  },
  {
    check: () => true,
    field: "Submit the appropriate documentation See pages 2 and 3",
  },
  {
    check: () => true,
    field: "Submit the appropriate fees See fee schedule below",
  },
  {
    check: () => true,
    field: "New Birth Certificate based on child's sex or parent's race or color",
  },
  {
    text: () => "25.00",
    field: "Total for New Birth Certificate based on child's sex or parent's race or color",
  },
  {
    check: () => true,
    field: "Certified Corrected Birth Certificate",
  },
  {
    check: () => true,
    field: "Check Box1",
  },
  {
    check: () => true,
    field: "Check Box10",
  },
  {
    text: (applicant) => isMinor(applicant) 
      ? fullName(representativeName(applicant)) 
      : fullName(applicant.chosenName),
    field: "Name First Middle Last",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${abbreviateJurisdiction(applicant.residentJurisdiction ?? "")}, ${applicant.zip ?? ""}`,
    field: "Address Mailing Address City State Zip",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email Address",
  },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    field: "Daytime telephone number area code",
  },
  {
    text: (applicant) => phoneStart(applicant.phone),
    field: "Daytime telephone number first three digits",
  },
  {
    text: (applicant) => phoneEnd(applicant.phone),
    field: "Daytime telephone number last four digits",
  },
  {
    check: (applicant) => !isMinor(applicant),
    field: "Your relationship to Person named on the birth certificate",
    select: "Choice1",
  },
  {
    check: (applicant) => isMinor(applicant) && applicant.parentsAreOkay,
    field: "Your relationship to Person named on the birth certificate",
    select: "Choice0",
  },
  {
    text: (applicant) => applicant.birthName?.first 
      ? applicant.birthName?.first ?? "" 
      : applicant.legalName?.first ?? "",
    field: "Childs First Name",
  },
  {
    text: (applicant) => applicant.birthName?.middle 
      ? applicant.birthName?.middle ?? "" 
      : applicant.legalName?.middle ?? "",
    field: "Middle Name",
  },
  {
    text: (applicant) => applicant.birthName?.last
      ? `${applicant.birthName?.last ?? ""} ${applicant.birthName?.suffix ?? ""}`
      : `${applicant.legalName?.last ?? ""} ${applicant.legalName?.suffix ?? ""}`,
    field: "Last Name",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Date of Birth",
  },
  {
    text: (applicant) => {
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
    },
    field: "Sex",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "Place of Birth City or town",
  },
  {
    text: (applicant) => fullName(applicant.fathersBirthName),
    field: "Full Maiden Name First Middle Last of Parent 1",
  },
  {
    text: (applicant) => fullName(applicant.mothersBirthName),
    field: "Full Maiden Name First Middle Last of Parent 2",
  },
  {
    text: () => "Child's Name",
    field: "List item 1 to be added, corrected or removed",
  },
  {
    text: (applicant) => fullName(applicant.birthName) 
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    field: "What is on the birth certificate now for item 1",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "What should the birth certifcate say for item 1",
  },
  {
    text: () => "Child's Sex",
    field: "List item 2 to be added, corrected or removed",
  },
  {
    text: (applicant) => {
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
    },
    field: "What is on the birth certificate now for item 2",
  },
  {
    text: (applicant) => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        default:
          return "";
      }
    },
    field: "What should the birth certifcate say for item 2",
  },
  {
    text: (applicant) => applicant.chosenName?.first,
    field: "First Name",
  },
  {
    text: (applicant) => applicant.chosenName?.middle,
    field: "Middle Name_2",
  },
  {
    text: (applicant) => applicant.chosenName?.last,
    field: "Last Name_2",
  },
  {
    check: () => true,
    field: "We are I am requesting a new birth certificate be filed to incorporate the correction to the child's sex or remove the parent's race or color",
  },
  {
    check: () => true,
    field: "Group1",
    select: "Yes, I would like a certified copy of the corrected birth certificate",
  },
  {
    text: (applicant) => isMinor(applicant) 
      ? fullName(representativeName(applicant)) 
      : fullName(applicant.chosenName),
    field: "Printed Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Address",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "City",
  },
  {
    text: (applicant) => applicant.residentJurisdiction,
    field: "State",
  },
  {
    text: (applicant) => applicant.zip,
    field: "Zip",
  },
  {
    text: (applicant) => 
      isMinor(applicant) && applicant.parentsAreOkay
      ? applicant.streetAddress : "",
    field: "Address",
  },
  {
    text: (applicant) =>
      isMinor(applicant) && applicant.parentsAreOkay
      ? applicant.birthCity : "",
    field: "City",
  },
  {
    text: (applicant) =>
      isMinor(applicant) && applicant.parentsAreOkay
      ? applicant.residentJurisdiction : "",
    field: "State",
  },
  {
    text: (applicant) =>
      isMinor(applicant) && applicant.parentsAreOkay
      ? applicant.zip : "",
    field: "Zip",
  },
];