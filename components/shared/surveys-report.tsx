import SurveyResponseCard from "./survey-response-card";

interface SurveyReportType {
  [questionId: number]: {
    [option: string]: number;
    otherInput: string[];
    prompt: string;
  }
}

interface Props {
  report: SurveyReportType;
}
export default function SurveysReport({ report }: Props) {
  return (
    <div className="max-w-xl px-5">
      <h2 className="text-2xl font-bold">Survey Report</h2>
      {Object.keys(report).map((questionId) => (
        <SurveyResponseCard key={questionId} prompt={report[questionId].prompt} questionId={questionId} questionData={report[questionId]} />
      ))}

    </div>
  )
}