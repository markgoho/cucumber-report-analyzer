import { BaseStep } from './base-step';
import { Comment } from './comment';
import { ElementStep } from './element-step';

export interface ScenarioElement {
  id: string;
  keyword: string;
  type: 'scenario';
  before?: BaseStep[];
  after: BaseStep[];
  name: string;
  description: string;
  line: number;
  steps?: ElementStep[];
  comments?: Comment[];
}
