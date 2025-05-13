/**
 * Copyright 2023, 2024 Sasha Lišková and Stephanie Beckon
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

import { compileDocuments } from "../lib/fill";

import useStore from "../store";

import { allProcesses } from "../types/jurisdiction";

function Guide() {
  const applicant = useStore((state) => state.person);
  const { residentJurisdiction, birthJurisdiction } = applicant;
  const processes = allProcesses(residentJurisdiction, birthJurisdiction);
  // const guides = compileGuides(processes, applicant);

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
  });

  let documents = processes.map((proc) => proc.documents).flat();

  documents = [...new Set(documents)];

  return (
    <>
      <h2>Thank you for using Transpapers!</h2>

      <p>
        Your gender-affirming documents have been compiled and automatically
        downloaded. What follows is a personalized guide to filing them.{" "}
        <strong>
          You should print both this webpage and the PDF containing your
          compiled documents.
        </strong>
        Please review the forms and guide side by side.
      </p>

      {documents
        .filter((doc) => doc.include === undefined || doc.include(applicant))
        .filter((doc) => doc.guide !== undefined)
        .map((doc) => (
          <section key={doc.id || doc.name}>
            {React.createElement(doc.guide!, { person: applicant })}
          </section>
        ))}
    </>
  );
}

export default Guide;
