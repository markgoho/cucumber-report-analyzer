export interface BaseStep {
  match: {
    location: string;
  };
  result: {
    status: string;
    duration?: number; // in nanoseconds
  };
}
