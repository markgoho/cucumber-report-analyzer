import { expect, test, describe } from '@jest/globals';
import { ElementStep, calculateElementStepsRuntime } from '../src';
import { featureWithBackground } from './mocks';

describe('Calculating element steps runtime', () => {
  test('should calculate the runtime of a set of element steps', () => {
    const elementSteps: ElementStep[] =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      featureWithBackground.elements[0].steps!;

    expect(calculateElementStepsRuntime(elementSteps)).toBe(182_203);
  });
});
