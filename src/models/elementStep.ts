import { BaseStep } from "./baseStep";

export interface ElementStep extends BaseStep {
  keyword: string;
  name: string;
  line: number;
  after: BaseStep[];
}
