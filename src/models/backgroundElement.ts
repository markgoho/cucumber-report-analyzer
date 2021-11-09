import { BaseStep } from "./baseStep";
import { ElementStep } from "./elementStep";

export interface BackgroundElement {
  keyword: "Background";
  type: "background";
  before: BaseStep[];
  name: string;
  description: string;
  line: number;
  steps?: ElementStep[];
}
