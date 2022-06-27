import { expect, test, describe } from '@jest/globals';
import { backgroundElement } from './mocks';
import { calculateBackgroundRuntime } from '../src';

describe('Calculating background step runtime', () => {
  test('should calculate the runtime of a set of element steps', () => {
    expect(calculateBackgroundRuntime(backgroundElement)).toBe(7_527_435);
  });

  test('should test the runtime of another background element', () => {
    expect(calculateBackgroundRuntime(backgroundElement)).toBe(7_527_435);
  });
});
