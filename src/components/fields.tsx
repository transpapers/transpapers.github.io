/*!
 * @licstart The following is the entire license notice for the JavaScript code in this file.
 * Copyright (C) 2023-2025 Sasha Lišková and Stephanie Beckon
 *
 * This file is part of Transpapers.
 *
 * Transpapers is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * Transpapers is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * Transpapers. If not, see <https://www.gnu.org/licenses/>.
 * @licend The above is the entire license notice for the JavaScript code in this file.
 */

import * as React from "react";

import {
  StringField,
  CheckboxField,
  OptionField,
  SelectField,
  NumberField,
  NameField,
  DateField,
  TelField,
  EmailField,
  CountyField,
  HomeAddressField,
  MailAddressField,
} from "./fieldsHtml";

import { isMinor } from "../lib/util";

import { Field } from "../types/field";

import { AnyJurisdiction } from "../types/generic";

export const fields: Record<string, Field> = {
  legalName: {
    title: "Full legal name",
    subtitle: "as it appears on your ID",
    name: "legalName",
    type: "Name",
  },
  chosenName: {
    title: "Full chosen name",
    subtitle: "as it will appear on your ID",
    name: "chosenName",
    type: "Name",
  },
  birthName: {
    title: "Name at birth",
    subtitle: "if different from legal name",
    name: "birthName",
    type: "Name",
  },
  reasonForNameChange: {
    title: "Reason for name change",
    subtitle:
      "If you want to avoid mentioning transition we recommend “I want to be known legally as I am by my family and friends”.",
    name: "reasonForNameChange",
    type: "string",
    default: "Gender Transition",
  },
  sealBirthCertificate: {
    title: (
      <>
        I would like to{" "}
        <a href="https://en.wikipedia.org/wiki/Sealed_birth_records">
          seal my previous birth certificate.
        </a>
      </>
    ),
    subtitle:
      "This prevents third parties from accessing your deadname and assigned gender at birth on your original birth certificate.",
    name: "sealBirthCertificate",
    type: "boolean",
  },
  birthCity: {
    title: "City of birth",
    name: "birthCity",
    type: "string",
  },
  birthCounty: {
    title: "County of birth",
    subtitle: "If it's not listed on your birth certificate use birth city to look it up.",
    name: "birthCounty",
    type: "string",
  },
  assignedSex: {
    title: "Sex assigned at birth",
    name: "assignedSex",
    type: "option",
    options: { M: "M", F: "F", X: "X" },
  },
  gender: {
    title: "Gender",
    subtitle: "as it will appear on your ID",
    name: "gender",
    type: "option",
    options: { M: "M", F: "F", X: "X" },
  },
  doNotPublish: {
    title:
      "Request that the court case records be sealed or otherwise not publically available, including newspaper publications in the states that require them.",
    subtitle:
      "This usually requires proof that you would be either placed in potential danger or would be discrimminated against if the case was published. Some states have more stringent requirements than others, we will cover any of those in the guide.",
    name: "doNotPublish",
    type: "boolean",
  },
  hasCriminalRecord: {
    title:
      "I have a criminal record, pending charges, or have been previously charged with a crime.",
    subtitle:
      "Minors need to check the box if they or the adult filing the paperwork for them has a criminal record or pending charges.",
    name: "hasCriminalRecord",
    type: "boolean",
  },
  parentsAreOkay: {
    title: "My parents are both alive and not divorced.",
    name: "parentsAreOkay",
    type: "boolean",
    include: (data) => isMinor(data),
  },
  mothersBirthName: {
    title: "Mother's name",
    subtitle: "at her birth",
    name: "mothersBirthName",
    type: "Name",
  },
  mothersBirthdate: {
    title: "Mother's date of birth",
    name: "mothersBirthdate",
    type: "Date",
  },
  fathersBirthName: {
    title: "Father's name",
    subtitle: "at his birth",
    name: "fathersBirthName",
    type: "Name",
  },
  fathersBirthdate: {
    title: "Father's date of birth",
    name: "fathersBirthdate",
    type: "Date",
  },
  phone: {
    title: "Daytime phone",
    name: "phone",
    type: "string",
  },
  mailAddress: {
    title: "Mailing Address",
    subtitle: "Address where you get your mail. Leave fields blank as needed.",
    name: "mailAddress",
    type: "mailAddress",
  },
  streetEqualsMail: {
    title: "My home address is the same as my mailing address.",
    subtitle: "If you check this leave the Mailing Address fields blank.",
    name: "streetEqualsMail",
    type: "boolean",
  },
  homeAddress: {
    title: "Home Address",
    subtitle: "Address where you live. The apartment field is optional.",
    name: "homeAddress",
    type: "homeAddress",
  },
  email: {
    title: "Email address",
    subtitle: "We will not email you.",
    name: "email",
    type: "email",
  },
  representativeName: {
    title: "Name of your legal representative",
    subtitle: "Enter the name of the adult that will appear with you in court.",
    name: "representativeName",
    type: "Name",
    include: (data) => isMinor(data),
  },
  passport: {
    title: "Passport status",
    name: "passport",
    type: "select",
    options: {
      ds5504: "Passport undamaged and issued within last 12 months",
      ds82: "Passport undamaged and issued at age 16+ within last 15 years",
      ds11: "None of the above",
    },
  },
};

export function renderField(
  field: Field,
  jurisdiction: AnyJurisdiction,
  register: (name: string) => object,
) {
  if (!("type" in field)) {
    return undefined;
  }

  if (field.type === "string") {
    return <StringField field={field} register={register} />;
  }
  if (field.type === "boolean") {
    return <CheckboxField field={field} register={register} />;
  }
  if (field.type === "option") {
    return <OptionField field={field} register={register} />;
  }
  if (field.type === "select") {
    return <SelectField field={field} register={register} />;
  }
  if (field.type === "number") {
    return <NumberField field={field} register={register} />;
  }
  if (field.type === "Name") {
    return <NameField field={field} register={register} />;
  }
  if (field.type === "homeAddress") {
    return <HomeAddressField field={field} register={register} />;
  }
  if (field.type === "mailAddress") {
    return <MailAddressField field={field} register={register} />;
  }
  if (field.type === "Date") {
    return <DateField field={field} register={register} />;
  }
  if (field.type === "tel") {
    return <TelField field={field} register={register} />;
  }
  if (field.type === "county") {
    return <CountyField jurisdiction={jurisdiction} register={register} />;
  }
  if (field.type === "email") {
    return <EmailField field={field} register={register} />;
  }

  return "";
}
