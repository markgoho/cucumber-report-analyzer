import { BaseStep } from '../models';

export const calculateBaseStepsRuntime = (baseSteps: BaseStep[]): number => {
  let runtime = 0;

  for (const baseStep of baseSteps) {
    runtime = baseStep.result.duration
      ? runtime + baseStep.result.duration
      : runtime;
  }

  return runtime;
};
