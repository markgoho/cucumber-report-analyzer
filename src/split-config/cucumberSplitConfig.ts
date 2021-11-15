import {
  createSplitConfig,
  FileWithRuntime,
  SplitConfig,
} from 'split-config-generator';

import { CucumberFeature } from '../models';
import { reportToRuntime } from '../util';

export const createCucumberSplitConfig = (
  features: CucumberFeature[],
): SplitConfig => {
  const files: FileWithRuntime[] = reportToRuntime(features);

  const splitConfig: SplitConfig = createSplitConfig(files);

  return splitConfig;
};
