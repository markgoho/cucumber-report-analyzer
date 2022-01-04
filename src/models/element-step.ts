import { BaseStep } from './base-step';
import { Comment } from './comment';

export interface ElementStep extends BaseStep {
  keyword: string;
  name: string;
  line: number;
  after: BaseStep[];
  comments?: Comment[];
}
