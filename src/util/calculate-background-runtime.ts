import { BackgroundElement } from '../models';
import { calculateBaseStepsRuntime } from './calculate-base-steps-runtime';
import { calculateElementStepsRuntime } from './calculate-element-steps-runtime';

export const calculateBackgroundRuntime = (
  backgroundElement: BackgroundElement,
): number => {
  const { before, steps } = backgroundElement;

  const beforeRuntime = calculateBaseStepsRuntime(before);
  const elementStepRuntime = steps ? calculateElementStepsRuntime(steps) : 0;

  return beforeRuntime + elementStepRuntime;
};
