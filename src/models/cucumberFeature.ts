import { BackgroundElement } from "./backgroundElement";
import { ScenarioElement } from "./scenarioElement";

export interface CucumberFeature {
  uri: string; // file path
  id: string;
  keyword: "Feature";
  name: string;
  description: string;
  line: number;
  elements: Array<ScenarioElement | BackgroundElement>;
}
