/*!
 * @licstart The following is the entire license notice for the JavaScript code in this file.
 * Copyright (C) 2023-2026 Sasha Lišková and Stephanie Beckon
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

import { type Person } from "../../../types/person";

function DelawareGatherDocsGuide({ person }: { person: Partial<Person> }) {
  const { age, birthJurisdictionName, parentsAreOkay, birthName, legalName } = person;

  return (
    <section key="Delaware-GatherDocs">
      <h3>Gather Documents for Filing (DE)</h3>
      <p>
        A certified copy of your birth certificate will be needed in order to file at 
        the court. If you do not have one already you will need to get one. 
      </p>

      {birthJurisdictionName === "Delaware" ? (
        <>
          <p>
            Since you were born in Delaware you can get a copy through the Delaware Vital 
            Statistics department or{" "}
            <a href="https://www.vitalchek.com/order_main.aspx?eventtype=BIRTH">
              Vital Chek
            </a>
            . For the Vital Statistics department we have included the “Application for a 
            certified copy of a Delaware Birth Certificate” form to request one.
          </p>

          <p>
            If {age && age < 18 ? "your petitioner decides" : "you decide"} to use this form
            please fill in the name of the hospital you were born at, if known.{" "}
            {age && age < 18 && !parentsAreOkay ? (
              <>
                If you have a legal guardian making this request they need to check the “I 
                am the legal guardian” box in the “Relationship to the person whose birth 
                certificate you are requesting” section and attach a certified copy of their 
                court ordered guardianship papers.
              </>
            ) : (
              ""
            )}
            {" "}Then {age && age < 18 ? "they" : "you"} need to sign and date at the bottom. 
            Do <strong>not</strong> fill out the “Identification” line at the very bottom.
          </p>

          <p>
            {age && age < 18 ? "Your Petitioner" : "You"} will need to make out a check or 
            money order for $25.00 to the State of Delaware.{" "}
            <strong>Do not send cash.</strong> After that 
            {age && age < 18 ? " your Petitioner" : " you"} will need to make a photocopy of 
            either a drivers license, state ID, or passport. Make sure to copy both sides of 
            the drivers license or state ID, for a passport only the page with
            {age && age < 18 ? " their" : " your"} photo needs to be copied. Then place the 
            form, ID photocopy, and check into an envelope. Then stamp it and mail it to one
            of the three office locations listed at the top of the form, it does not matter
            which one.
          </p>
        </>
      ) : (
        <p>
          If you don&apos;t have a useable copy you will need to either
          {age && age < 18 ? " have a parent/guardian" : " "} order one
          online through{" "}
          <a href="https://www.vitalchek.com/order_main.aspx?eventtype=BIRTH">
            VitalChek
          </a>{" "}
          or go through your birth state/territory&apos;s {" "}
          <a href="https://www.cdc.gov/nchs/w2w/index.htm">
            Vital Records department
          </a>
          . If you were born in another country it will be through your birth 
          country&apos;s records department instead to get proof of birth. Any 
          document not in English needs a professional translation.
        </p>
      )}

      {birthName !== legalName && birthName !== undefined && 
        <p>
          Since your current name does not match the one on your original birth 
          certificate {age && age < 18 ? "your Petitioner" : "you"} will need to 
          bring certified copies documenting every name change. This would 
          include documents like adoption papers, marriage certificates, divorce 
          documents, or other court orders.
        </p>
      }

      {age && age < 18 && !parentsAreOkay &&
        <p>
          If one or both of your parents are deceased your petitioner will need 
          to get certified copies of their death certificates in order to file. 
          If needed death certificates can be ordered through Vital Chek, see this 
          {" "}
          <a href="https://www.vitalchek.com/order_main.aspx?eventtype=DEATH">
            link
          </a>
          . If your petitioner is a legal guardian they will also need to 
          bring a certified copy of the court order for their guardianship.
        </p>
      }
    </section>
  );
}

export default DelawareGatherDocsGuide;
