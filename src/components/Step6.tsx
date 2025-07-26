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

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import useStore from "../store";

import { fields, renderField } from "./fields";

import { neededFieldNames } from "../lib/shakeTree";

import { type Person } from "../types/person";

function Step6() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const processes = useStore((state) => state.processes);
  const applicant = useStore((state) => state.person);
  const updatePerson = useStore((state) => state.updatePerson);
  const finalizeApplicant = useStore((state) => state.finalizeApplicant);

  const { residentJurisdiction, birthJurisdiction } = applicant;

  if (residentJurisdiction && birthJurisdiction) {
    console.log(processes);
    const fieldNamesToShow: (keyof Person)[] =
      processes.flatMap(neededFieldNames);

    const onSubmit = async (data: Partial<Person>) => {
      updatePerson(data);
      finalizeApplicant();

      await navigate("/guide");
    };

    // We do it this way to maintain ordering.
    const fieldsToShow = Object.entries(fields)
      .filter(([fieldName]) =>
        fieldNamesToShow.includes(fieldName as keyof Person),
      )
      .map(([, field]) => field)
      .filter((field) => !field.include || field.include(applicant));

    return (
      <form onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
        <h2>Tell us about yourself...</h2>
        <ul className="spaced">
          {fieldsToShow.map((field) => (
            <li key={field.name}>
              {renderField(field, residentJurisdiction, register)}
            </li>
          ))}
        </ul>
        <input type="submit" value="Get my gender-affirming forms" />
      </form>
    );
  }
}

export default Step6;
