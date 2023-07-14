interface SurveyReportType {
  [questionId: number]: {
    [option: string]: number;
    otherInput: string[];
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
        <div key={questionId}>
          <h2 className="text-2xl mt-6">Question {questionId}</h2>
          <h3>Counts:</h3>
          {Object.keys(report[questionId]).map((subOptionKey) => {
            if(subOptionKey !== 'otherInput') {
              return (
                <p key={subOptionKey}>
                  {subOptionKey}: {report[questionId][subOptionKey]}
                </p>
              );
            } else return null;
          })}
          <h3 className="text-xl text-bold">Other Input:</h3>
          {report[questionId].otherInput.map((otherInputItem, index) => (
            <span key={index}>{otherInputItem}</span>
          ))}
        </div>
      ))}
    </div>
  )
}