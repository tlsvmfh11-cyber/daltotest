export interface ReviewType {
  id: number;
  age: string;
  context: string;
  content: string;
}

export interface FaqType {
  id: number;
  question: string;
  answer: string;
}

export interface ProcessStepType {
  step: number;
  title: string;
  description: string;
}