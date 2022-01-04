import { BaseStep } from "./base-step";
import { ElementStep } from "./element-step";

export interface BackgroundElement {
  keyword: "Background";
  type: "background";
  before: BaseStep[];
  name: string;
  description: string;
  line: number;
  steps?: ElementStep[];
}
