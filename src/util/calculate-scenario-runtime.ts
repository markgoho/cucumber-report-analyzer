import { ScenarioElement } from '../models';
import { calculateBaseStepsRuntime } from './calculate-base-steps-runtime';
import { calculateElementStepsRuntime } from './calculate-element-steps-runtime';

export const calculateScenarioRuntime = (scenario: ScenarioElement): number => {
  const { before, steps, after } = scenario;

  const beforeRuntime = before ? calculateBaseStepsRuntime(before) : 0;
  const elementStepsRuntime = steps ? calculateElementStepsRuntime(steps) : 0;
  const afterRuntime = after ? calculateBaseStepsRuntime(after) : 0;

  return beforeRuntime + elementStepsRuntime + afterRuntime;
};
