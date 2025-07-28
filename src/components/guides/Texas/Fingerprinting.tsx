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
import { TexasCounty } from "../../../types/locality";

function TexasFingerprintingGuide({
  person,
  locality,
}: {
  person: Person;
  locality: TexasCounty;
}) {
  const { residentLocality, isChangingLegalSex, isChangingLegalName } = person;
  const { backgroundCheckRequired } = locality;

  return (
    <section key="Texas-Fingerprinting">
      <h3>Fingerprinting (TX)</h3>

      {residentLocality?.name === "Bandera" ? (
        <p>
          Bandera county will have you do the fingerprinting on a custom 
          fingerprinting card unique to their county. Go to the district 
          clerk&apos;s office at 3360 TX-173, Bandera, TX 78003 for the card and 
          further instructions.
        {isChangingLegalSex ? 
          " Get an extra card for the gender change petition and write “Exhibit B” at the top for the court. " : ""}
          Ignore the rest of this section.
        </p>
      ) : ("")}

      {residentLocality?.name === "Crockett" ? (
        <p>
          Crockett county has a custom Identogo form that they use, you can 
          pick it up when filing, ignore the rest of this section.
        {isChangingLegalSex ? 
          " Get an extra card for the gender change petition and write “Exhibit B” at the top for the court." : ""}
        </p>
      ) : ("")}

      {residentLocality?.name === "Rusk" ? (
        <p>
          Rusk county will have you do the fingerprinting at the court 
          house when you file, ignore the rest of this section.
        {isChangingLegalSex ? 
          " Get an extra card for the gender change petition and write “Exhibit B” at the top for the court." : ""}
        </p>
      ) : ("")}

      <p>
        You will need a filled out fingerprint card to submit with your 
        paperwork, there are a variety of options to do this across Texas. 
        We have compiled a map of these locations{" "}
        <a href="https://www.google.com/maps/d/u/1/edit?mid=1TKgi_yLa7CydkGgBppyiyy8EFsyhbYg&usp=sharing">
          here
        </a>
        {" "}and separated them into a few categories. Blue pins are law 
        enforcement offices, yellow pins are also law enforcement offices but 
        they require you to have a fingerprint card ready for them to fill 
        out, green pins are private businesses. If you choose a yellow pin you 
        can buy either a Texas DPS card or an FBI card (FD-258) from many 
        places including Amazon, Identogo, or an office supply store. It does 
        not matter which of the two types you buy.  Each pin also contains more 
        specific information about each location such as hours, prices, or 
        contact info.
      {isChangingLegalName && isChangingLegalSex ? (
        <>
          Since you are doing both a name and gender change make sure you have 
          an extra card for the gender change petition.
        </>
      ):("")}
      {backgroundCheckRequired ? (
        <>
          For the name change {residentLocality?.name} county requires a background 
          check in addition to a fingerprint card so you will need to get an 
          additional filled out fingerprint card, one is for the court and one is 
          sent to DPS after filing.
        </>
      ):("")}
      </p>

      <p>
        If the card is not filled out for you by someone else we have included a 
        document called the “Submission of Fingerprint Cards to DPS/FBI for 
        Adult Legal Name Change” (CR-65). This will tell you what information 
        is required on the card and where. Do <strong>not</strong> send any cards 
        to DPS until a court clerk tells you to.
        {isChangingLegalName ? (
          <>
            Write “Exhibit” at the top of one fingerprint card, that card is for{" "}
            {residentLocality?.name} the court.
          </>
        ):("")}
        {isChangingLegalSex ? 
          "Write “Exhibit B” on top of the fingerprint card for the court in Travis County. " : ""}
          Once you have the filled out card(s) you are ready to file.
      </p>
    </section>
  );
}

export default TexasFingerprintingGuide;
