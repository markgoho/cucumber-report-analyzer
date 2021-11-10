import { FileWithRuntime } from 'split-config-generator';

import { CucumberFeature } from '../models';
import { createFileWithRuntime } from './createFileWithRuntime';

export const reportToRuntime = (
  report: CucumberFeature[],
): FileWithRuntime[] => {
  return report
    .map(createFileWithRuntime)
    .sort((a, b) => (a.runtime < b.runtime ? -1 : 1));
};
