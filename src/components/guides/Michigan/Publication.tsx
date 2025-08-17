/**
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

import { type Person } from "../../../types/person";
import { MichiganCounty } from "../../../types/locality";

function MichiganPublicationGuide({
  person,
  locality,
}: {
  person: Person;
  locality: MichiganCounty;
}) {
  const { age } = person;
  const { publications } = locality;

  return (
    <section key="MI-Publication">
      <h3>Publication (MI)</h3>

      <p>
        If the clerk instructed
        {age && age < 18 ? " your parent/guardian " : " you "} to place an ad
        with a local newspaper the court-approved newspaper(s) in your county
        are as follows:
      </p>

      <p>
        <span>Newspaper: {publications[0].name}</span>
        <br />
        <span>
          Website:{" "}
          <a href="{publications[0]?.website}" title="link">
            {" "}
            {publications[0]?.website}
          </a>
        </span>
        <br />
        <span>Contact Email: {publications[0]?.email}</span>
      </p>

      {publications[1].name ? (
        <p>
          <span>Newspaper: {publications[1].name}</span>
          <br />
          <span>
            Website:{" "}
            <a href="{publications[1]?.website}" title="link">
              {" "}
              {publications[1]?.website}
            </a>
          </span>
          <br />
          <span>Contact Email: {publications[1]?.email}</span>
        </p>
      ) : (
        ""
      )}

      {publications[2].name ? (
        <p>
          <span>Newspaper: {publications[2].name}</span>
          <br />
          <span>
            Website:{" "}
            <a href="{publications[2]?.website}" title="link">
              {" "}
              {publications[2]?.website}
            </a>
          </span>
          <br />
          <span>Contact Email: {publications[2]?.email}</span>
        </p>
      ) : (
        ""
      )}

      {publications[3].name ? (
        <p>
          <span>Newspaper: {publications[3].name}</span>
          <br />
          <span>
            Website:{" "}
            <a href="{publications[3]?.website}" title="link">
              {" "}
              {publications[3]?.website}
            </a>
          </span>
          <br />
          <span>Contact Email: {publications[3]?.email}</span>
        </p>
      ) : (
        ""
      )}

      {publications[4].name ? (
        <p>
          <span>Newspaper: {publications[4].name}</span>
          <br />
          <span>
            Website:{" "}
            <a href="{publications[4]?.website}" title="link">
              {" "}
              {publications[4]?.website}
            </a>
          </span>
          <br />
          <span>Contact Email: {publications[4]?.email}</span>
        </p>
      ) : (
        ""
      )}

      {publications[5].name ? (
        <p>
          <span>Newspaper: {publications[5].name}</span>
          <br />
          <span>
            Website:{" "}
            <a href="{publications[5]?.website}" title="link">
              {" "}
              {publications[5]?.website}
            </a>
          </span>
          <br />
          <span>Contact Email: {publications[5]?.email}</span>
        </p>
      ) : (
        ""
      )}

      {publications[6].name ? (
        <p>
          <span>Newspaper: {publications[6].name}</span>
          <br />
          <span>
            Website:{" "}
            <a href="{publications[6]?.website}" title="link">
              {" "}
              {publications[6]?.website}
            </a>
          </span>
          <br />
          <span>Contact Email: {publications[6]?.email}</span>
        </p>
      ) : (
        ""
      )}

      <p>
        At the provided link(s),{" "}
        {age && age < 18 ? " your parent/guardian " : " you "}
        should contact a newspaper about placing a legal notice for the name
        change hearing. Make sure the publication date is more than seven days
        before the hearing date. After a few days, confirm with the court that
        they have received the necessary paperwork from the newspaper.
      </p>
    </section>
  );
}

export default MichiganPublicationGuide;
