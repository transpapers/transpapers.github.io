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

import { Person } from './person';
import { Formfill } from './formfill';

export enum Target {
  BirthRecord = 'birth-record',
  GenderMarker = 'gender-marker',
  NameChange = 'name-change',
  Passport = 'passport',
  PrimaryIdentification = 'primary-identification',
  SocialSecurity = 'social-security',
}

/**
 * Procedural information for filing.
 */
export interface Process {
  /**
   * State or territory. Leave empty for federal forms.
   */
  jurisdiction?: string;

  /**
   * The object of filing the documents; e.g., birth record, primary
   * identification, passport, etc.
   */
  target?: Target;

  /**
   * A list of other targets required before or concurrently with this one.
   * Any sort of dependency loop is assumed to be filed simultaneously.
   */
  depends?: Target[];

  /**
   * An ordered list of documents to attach.
   */
  documents: Document[];

  /**
   * `true` if this process requires its applicant to be born in its
   * jurisdiction.
   */
  isBirth?: boolean;
}

/**
 * A single document to be filed.
 */
export interface Document {
  /**
   * Human-readable name of document.
   */
  name?: string;

  /**
   * State or federal document ID, if one exists.
   */
  id?: string;

  /**
   * Location of PDF file, from root public/forms/ (dev tree) or forms/
   * (served.)
   */
  filename?: string;

  /**
   * Location of guide for this document, from root public/guides/ (dev tree)
   * or guides/ (served.)
   */
  guide?: string;

  /**
   * Criterion for inclusion.
   *
   * @remarks Defaults to `() => true`.
   */
  include?: (applicant: Person) => boolean | undefined;

  /**
   * List of form fields to fill, if any.
   */
  map?: Formfill[];
}

export const targets: { [key in Target]?: string } = {
  [Target.BirthRecord]: 'update my birth certificate.',
  [Target.GenderMarker]: 'update my gender marker.',
  [Target.NameChange]: 'change my legal name.',
  [Target.PrimaryIdentification]: 'update my primary identification.',
  [Target.Passport]: 'update my federal passport.',
  [Target.SocialSecurity]:
    'update my information with the Social Security Administration.',
};
