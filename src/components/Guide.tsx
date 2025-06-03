/**
 * Copyright 2023-2025 Sasha Lišková and Stephanie Beckon
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
 */

import * as React from "react";

import { allJurisdictions } from "../jurisdiction/all";

import { compileDocuments, getLocality } from "../lib/fill";

import useStore from "../store";

import { type Person } from "../types/person";
import { allProcesses } from "../types/jurisdiction";

import { type DocumentType, type LocalityType } from "../types/generic";

function Guide() {
  const applicant = useStore((state) => state.person);
  const { residentJurisdiction, birthJurisdiction } = applicant;
  const processes = allProcesses(residentJurisdiction, birthJurisdiction);

  compileDocuments(processes, applicant).then((doc) => {
    if (doc !== undefined) {
      const url = URL.createObjectURL(
        new Blob([doc], { type: "application/pdf" }),
      );
      const link = document.createElement("a");
      link.download = "gender_affirming_documents.pdf";
      link.href = url;
      link.click();
      URL.revokeObjectURL(link.href);
    }
  }, console.error);

  const documentDict = processes.reduce((dict, proc) => {
    const jurisdictionName = proc.isBirth
      ? applicant.birthJurisdiction
      : applicant.residentJurisdiction;
    const localityName = !proc.isBirth ? applicant.residentLocality : null;

    if (jurisdictionName) {
      const jurisdiction = allJurisdictions.get(jurisdictionName);
      if (jurisdiction && localityName) {
        const locality = getLocality(jurisdiction, localityName);
        if (locality) {
          const entry = dict.get(locality);
          if (entry && proc.documents) {
            proc.documents.forEach((doc) => {
              if (!entry.includes(doc)) entry.push(doc);
            });
          } else {
            dict.set(locality, []);
          }
        }
      }
    }
    return dict;
  }, new Map<LocalityType, DocumentType[]>());

  const guideElements = documentDict.entries().flatMap(([locality, docs]) => {
    return [
      ...docs.map((doc) => {
        type theRightType = React.FunctionComponent<{
          person: Person;
          locality: typeof locality;
        }>;
        if (doc.guide as theRightType) {
          return React.createElement(doc.guide as theRightType, {
            person: applicant,
            locality,
          });
        }
      }),
    ];
  });

  return (
    <>
      <h2>Thank you for using Transpapers!</h2>

      <p>
        Your gender-affirming documents have been compiled and automatically
        downloaded. What follows is a personalized guide to filing them.{" "}
        <strong>
          You should print both this webpage and the PDF containing your
          compiled documents.
        </strong>{" "}
        Please review the forms and guide side by side.
      </p>
      {...Array.from(guideElements)}
    </>
  );
}

export default Guide;
