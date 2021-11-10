import { BaseStep } from './baseStep';
import { Comment } from './comment';

export interface ElementStep extends BaseStep {
  keyword: string;
  name: string;
  line: number;
  after: BaseStep[];
  comments?: Comment[];
}
