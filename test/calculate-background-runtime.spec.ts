import { backgroundElement } from './mocks';
import { calculateBackgroundRuntime } from '../src';

describe('Calculating background step runtime', () => {
  it('should calculate the runtime of a set of element steps', () => {
    expect(calculateBackgroundRuntime(backgroundElement)).toBe(7_527_435);
  });

  it('should test the runtime of another background element', () => {
    expect(calculateBackgroundRuntime(backgroundElement)).toBe(7_527_435);
  });
});
