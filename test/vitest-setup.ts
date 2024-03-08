import 'vitest-axe/extend-expect';
import { expect } from 'vitest';
import type { AxeMatchers } from 'vitest-axe/matchers';
import * as matchers from 'vitest-axe/matchers';

expect.extend(matchers);

declare module 'vitest' {
  export interface Assertion extends AxeMatchers {}
  export interface AsymmetricMatchersContaining extends AxeMatchers {}
}
