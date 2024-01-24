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
  jurisdiction?: string,

  /**
   * The object of filing the documents; e.g., birth record, primary
   * identification, passport, etc.
   */
  target: Target,

  /**
   * A list of other targets required before or concurrently with this one.
   * Any sort of dependency loop is assumed to be filed simultaneously.
   */
  depends?: Target[],

  /**
   * An ordered list of documents to attach.
   */
  documents: Document[],
}

/**
 * A single document to be filed.
 */
export interface Document {
  /**
   * Human-readable name of document.
   */
  name?: string,

  /**
   * State or federal document ID, if one exists.
   */
  id?: string,

  /**
   * Location of PDF file, from root public/forms/ (dev tree) or forms/
   * (served.)
   */
  filename?: string,

  /**
   * Location of guide for this document, from root public/guides/ (dev tree)
   * or guides/ (served.)
   */
  guide?: string,

  /**
   * Criterion for inclusion.
   *
   * @remarks Defaults to `() => true`.
   */
  include?: (applicant: Person) => boolean | undefined,

  /**
   * List of form fields to fill, if any.
   */
  map?: Formfill[],
}

export const targets: { [key in Target]?: string } = {
  [Target.BirthRecord]: 'update my birth certificate.',
  [Target.GenderMarker]: 'update my gender marker.',
  [Target.NameChange]: 'change my legal name.',
  [Target.PrimaryIdentification]: 'update my primary identification.',
  [Target.Passport]: 'update my federal passport.',
  [Target.SocialSecurity]: 'update my information with the Social Security Administration.',
};
