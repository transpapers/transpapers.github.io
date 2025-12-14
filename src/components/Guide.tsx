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

import { compileDocuments, collateDocuments } from "../lib/fill";

import useStore from "../store";

import { allProcesses } from "../types/jurisdiction";
import { type Person } from "../types/person";
import { Target } from "../types/process";
import { AnyJurisdiction } from "../types/generic";

import { allJurisdictions } from "../jurisdiction/all";
import { compileGuidesFor } from "../lib/fill";

import {
  type AnyProcess,
  type AnyDocument,
  type Guide,
  type AnyGuide,
  type AnyLocality,
} from "../types/generic";

interface GuideSection {
  target: Target;
  locality?: AnyLocality;
  guides: AnyGuide[];
}

interface Instructions {
  documents: AnyDocument[];
  guideSections: GuideSection[];
}

export function compileInstructions(
  applicant: Person,
  processes: AnyProcess[],
): Instructions {
  const guideSections: GuideSection[] = [];

  const { residentLocality } = applicant;

  processes.forEach((proc) => {
    const guidesForProc = compileGuidesFor(proc, applicant);
    const { target } = proc;
    if (target && guidesForProc) {
      guideSections.push({
        target,
        locality: residentLocality,
        guides: guidesForProc,
      });
    }
  });

  return {
    documents: compileDocuments(processes),
    guideSections,
  };
}

// TODO Error type this!
function getProcesses(
  residentJurisdiction: AnyJurisdiction,
  birthJurisdiction: AnyJurisdiction,
  setTargets: Target[],
  applicant: Person
): AnyProcess[] | undefined {
  const allProcs = allProcesses(residentJurisdiction, birthJurisdiction);
  const filteredProcs = allProcs;

  if(applicant.isChangingLegalName) {
    for (const nameProc of allProcs) {
      if (nameProc.target === Target.NameChange) {
        filteredProcs.push(nameProc)
      }
    }
  }

  if(applicant.isChangingLegalSex) {
    for (const genderProc of allProcs) {
      if (genderProc.target === Target.GenderMarker) {
        filteredProcs.push(genderProc)
      }
    }
  }

  if(applicant.isChangingSocialSecurity) {
    for (const socialProc of allProcs) {
      if (socialProc.target === Target.SocialSecurity) {
        filteredProcs.push(socialProc)
      }
    }
  }

  if(applicant.isChangingPrimaryID) {
    for (const idProc of allProcs) {
      if (idProc.target === Target.PrimaryIdentification) {
        filteredProcs.push(idProc)
      }
    }
  }

  if(applicant.isChangingBirthCert) {
    for (const birthProc of allProcs) {
      if (birthProc.isBirth) {
        filteredProcs.push(birthProc)
      }
    }
  }

  if(applicant.isChangingPassport) {
    for (const passProc of allProcs) {
      if (passProc.target === Target.Passport) {
        filteredProcs.push(passProc)
      }
    }
  }

  const processes: AnyProcess[] = [];
  const metTargets: Target[] = [];

  let count = 0;

  while (metTargets.length < setTargets.length && ++count < 100) {
    let addedSomethingThisTime = false;

    for (const proc of filteredProcs) {
      if (proc.target && !metTargets.includes(proc.target)) {
        const deps = proc.depends ?? [];
        const allMet = deps.reduce(
          (metSoFar, dep) => metSoFar && metTargets.includes(dep),
          true,
        );

        if (allMet) {
          addedSomethingThisTime = true;
          processes.push(proc);
          metTargets.push(proc.target);
        }
      }
    }

    if (!addedSomethingThisTime) {
      // Cannot be topologically sorted.
      return undefined;
    }
  }

  //The below lines add isJustGuide sections back into the process list.
  const guideProcesses: AnyProcess[] = residentJurisdiction.processes.filter((p) => p.isJustGuide);
  for (const guideProc of guideProcesses) {
    processes.push(guideProc);
  }

  return processes;
}

function Guide() {
  const applicant = useStore((state) => state.person);

  const { 
    residentJurisdictionName,
    residentLocalityName,
    birthJurisdictionName,
    processNames
  } = useStore((state) => state);

  const residentJurisdiction = allJurisdictions.find(
    (j) => j.name === residentJurisdictionName,
  );
  const birthJurisdiction = allJurisdictions.find(
    (j) => j.name === birthJurisdictionName,
  );

  if (!(residentJurisdiction && birthJurisdiction)) {
    return <>Error: Either Resident or Birth Jurisdiction failed to load.</>;
  }

  const processes = getProcesses(
    residentJurisdiction,
    birthJurisdiction,
    processNames,
  );

  if (!processes) {
    return <>Error: Either no checkboxes were selected in Step 5 or they failed to load.</>;
  }

  const { documents, guideSections } = compileInstructions(
    applicant,
    processes,
  );

  collateDocuments(documents, applicant).then((doc) => {
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

  const localities = residentJurisdiction.localities;
  const locality = localities.find(
    (j) => j.name === residentLocalityName);

  const guideElements = [];

  const localityChecker: {count: number, name: string} = {count: 0, name: "False"};
  const guideChecker: {count: number, name: string} = {count: 0, name: "False"};

  if (locality) {
    localityChecker.name = "True";
    for (const section of guideSections) {
      localityChecker.count = localityChecker.count + 1;
      for (const guide of section.guides) {
        guideChecker.count = guideChecker.count + 1;
        const correctlyTypedGuide = guide as Guide<typeof locality>;

        if (typeof correctlyTypedGuide === "function") {
          guideChecker.name = "True";
          const element = React.createElement(correctlyTypedGuide, {
            person: applicant,
            locality,
          });
          
          guideElements.push(element);
        }
      }
    }
  }

  const guidePushedLength: number = guideElements.length;

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

      {guidePushedLength === 0 ? (
      <p>
        <span>Locality generating correctly: {localityChecker.name}.</span>
        <br />
        <span>Number of guide sections generated: {localityChecker.count}.</span>
        <br />
        <span>Number of guide sections selected: {guideChecker.count}.</span>
        <br />
        <span>Number of guide sections pushed: {guidePushedLength}.</span>
        <br />
        <span>Guide pushing correctly: {guideChecker.name}.</span>
        <br />
        If you see this message report the above info to our{" "}
        <a href="https://tinyurl.com/mgdc-feedback">feedback</a> form.
      </p>
      ):("")}

      {...guideElements}
    </>
  );
}

export default Guide;
