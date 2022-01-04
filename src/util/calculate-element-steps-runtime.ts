import { ElementStep } from '../models';
import { calculateBaseStepsRuntime } from './calculate-base-steps-runtime';

export const calculateElementStepsRuntime = (
  elementSteps: ElementStep[],
): number => {
  // eslint-disable-next-line unicorn/no-array-reduce
  const elementStepsRuntime = elementSteps.reduce((accumulator, elementStep) => {
    const stepDuration = elementStep.result.duration ?? 0;
    const afterRuntime = calculateBaseStepsRuntime(elementStep.after);

    const totalStepRuntime = stepDuration + afterRuntime;

    return accumulator + totalStepRuntime;
  }, 0);

  return elementStepsRuntime;
};
