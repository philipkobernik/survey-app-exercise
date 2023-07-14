export interface MCOptionType {
  label: string;
}
export interface QuestionType {
  id: number;
  prompt: string;
  type: string;
  options: MCOptionType[];
  allowOther: boolean;
}

export interface SurveyConfigType {
  surveyId: number;
  questions: QuestionType[];
}