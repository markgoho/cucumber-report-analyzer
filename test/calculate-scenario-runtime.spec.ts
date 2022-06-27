import { expect, test, describe } from '@jest/globals';
import { scenarioElement, scenarioElement2, scenarioElement3 } from './mocks';
import { calculateScenarioRuntime } from '../src';

describe('Calculating scenario step runtime', () => {
  test('should calculate the runtime of a set of element steps', () => {
    expect(calculateScenarioRuntime(scenarioElement)).toBe(90_934_055);
  });
  test('should calculate the runtime of a set of element steps', () => {
    expect(calculateScenarioRuntime(scenarioElement2)).toBe(1_181_029_403);
  });

  test('should calculate a third runtime', () => {
    expect(calculateScenarioRuntime(scenarioElement3)).toBe(209_504);
  });
});
