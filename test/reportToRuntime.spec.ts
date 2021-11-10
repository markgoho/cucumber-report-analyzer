import { FileWithRuntime } from 'split-config-generator';

import { reportToRuntime } from '../src';
import { adminReport, cucumberReport } from './mocks';

describe.only('Cucumber Report to Runtime', () => {
  it('Should ingest a cucumber report and return a list of files with runtimes', () => {
    const runtimes: FileWithRuntime[] = reportToRuntime(cucumberReport);

    expect(runtimes).toHaveLength(4);

    expect(runtimes[0].runtime).toBe(3_849_659_084);
    expect(runtimes[1].runtime).toBe(7_327_623_838);
    expect(runtimes[2].runtime).toBe(17_284_683_799);
    expect(runtimes[3].runtime).toBe(125_508_206_196);
  });

  it('Should ingest a real world cucumber report and return a list of files with runtimes', () => {
    const runtimes: FileWithRuntime[] = reportToRuntime(adminReport);

    expect(runtimes).toHaveLength(20);
  });
});
