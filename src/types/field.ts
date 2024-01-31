import { Person } from './person';

export interface Field {
  title: string | JSX.Element,
  subtitle?: string | JSX.Element,
  name: string,
  type: string, // ENUM
  default?: any,
  include?: (applicant: Person) => boolean,
  options?: { [key: string]: string },
  required?: boolean,
}
