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

import { type Person } from "../../../types/person";

function AlaskaDMVGuide({ person }: { person: Person }) {
  const { age, isChangingLegalSex, gender, birthJurisdiction } = person;

  return (
    <section key="Alaska-DMV">
      <h3>Updating your Primary ID (AK)</h3>
      <p>
        Even if you do not have a driver&apos;s license or ID you still have to
        notify the DMV in writing that you have changed your legal name.
        Different DMV offices have different policies regarding this,{" "}
        <a href="https://dmv.alaska.gov/locations/state-dmv-office-locations">
          here
        </a>{" "}
        is a list of DMV offices with their contact information. You can call
        them to ask what their policy is. It does not matter which DMV office
        you use to send a letter.
      </p>

      <p>
        Alternatively you {age && age < 18 && "and a parent/guardian"} can go to
        a DMV location and request that they update the name on your license to
        your new name. That will count as notifying them. To do this you will
        need the “Driver License, Permit Or Identification Card Transaction
        Application” (form D1). For this form fill out any blanks we left in the
        top half of the form, if you are applying for a drivers license/ID for
        the first time check the “New” box instead of providing a drivers
        license or ID number.
        {gender && (gender as string) === "X"
          ? " Alaska does not have an “X” option for ID's, you will need to put either “Male” or “Female” in the top section. "
          : ""}
        Then select what type of ID or drivers license that you would like and
        answer questions 1 thru 10 on the bottom half of the form. On question 2
        though if you have had more names than what we have listed fill in the
        others. Do <strong>not</strong> sign or date this form with your old
        legal signature until you are instructed to by a DMV representative.{" "}
        {age &&
          age < 18 &&
          " Your parent/guardian will need to fill out the top of page 2 in front of the DMV employee."}
      </p>

      {isChangingLegalSex ? (
        <p>
          To change your gender marker on your ID as well you will need the
          “Certification For Change Of Sex Designator On Driver License Or
          Identification Card” (Form 427).{" "}
          {gender && (gender as string) === "X"
            ? " Alaska does not have an “X” option for ID's, you will need to check either “Male” or “Female” in section A. "
            : ""}
          Fill out your driver&apos;s license or ID number, if applicable, in
          section A and then sign it with your old name. Sign and date with your
          old name as well in section B and then take it to a medical
          professional or therapist who is giving you trans-related care. A full
          list of qualifying individuals is listed in section C of the form.
          Have them fill out section C and then you are ready to head to a DMV
          location. 
          {birthJurisdiction === "Alaska" 
            ? "If you are also updating your birth certificate you can have them do the letter for that section at the same time." 
            : ""}
        </p>
      ) : (
        ""
      )}

      <p>
        When you {age && age < 18 && "and a parent/guardian"} go in for the
        appointment be sure to bring
        {isChangingLegalSex ? " both forms, " : " the D1 form "} a certified
        copy of your court order and payment. Optionally, you may also update
        your vehicle registration(s). You will be given another form, which you
        should sign and initial in your new legal name. You will be charged a
        fee for each vehicle.
      </p>
    </section>
  );
}

export default AlaskaDMVGuide;
