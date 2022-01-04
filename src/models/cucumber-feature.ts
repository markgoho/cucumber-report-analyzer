import { BackgroundElement } from "./background-element";
import { ScenarioElement } from "./scenario-element";

export interface CucumberFeature {
  uri: string; // file path
  id: string;
  keyword: "Feature";
  name: string;
  description: string;
  line: number;
  elements: Array<ScenarioElement | BackgroundElement>;
}
