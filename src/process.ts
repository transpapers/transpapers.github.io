import { Person } from './person';
import { Formfill } from './types';

export enum Target {
  BirthRecord,
  GenderMarker,
  NameChange,
  Passport,
  PrimaryIdentification,
  SocialSecurity,
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
   * FIXME ENUM
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
  name: string,

  /**
   * State or federal document ID, if one exists.
   */
  id?: string,

  /**
   * Location of PDF file.
   *
   * FIXME From where?
   */
  filename: string,

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

export const targets = {
  [Target.BirthRecord]: 'update my birth certificate.',
  [Target.NameChange]: 'change my legal name and primary identification.',
  [Target.Passport]: 'update my federal passport.',
  [Target.SocialSecurity]: 'update my information with the Social Security Administration.',
};
