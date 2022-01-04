import { ElementStep, calculateElementStepsRuntime } from '../src';
import { featureWithBackground } from './mocks';

describe('Calculating element steps runtime', () => {
  it('should calculate the runtime of a set of element steps', () => {
    const elementSteps: ElementStep[] =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      featureWithBackground.elements[0].steps!;

    expect(calculateElementStepsRuntime(elementSteps)).toBe(182_203);
  });
});
