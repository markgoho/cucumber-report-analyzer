import { expect, test, describe } from '@jest/globals';
import { calculateBaseStepsRuntime } from '../src';
import { mockBaseSteps } from './mocks';

describe('Calculating base steps runtime', () => {
  test('should calculate the runtime of a list of base steps', () => {
    expect(calculateBaseStepsRuntime(mockBaseSteps)).toBe(21_101_251);
  });
});
