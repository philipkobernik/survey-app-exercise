interface Props {
  prompt: string;
  questionId: number;
  questionData: {
    [option: string]: number;
    otherInput: string[];
  }
}

export default function SurveyResponseCard({ prompt, questionId, questionData }: Props) {

  return (
    <div className="max-w-4xl p-5 border rounded mb-6">
      <h2 className="text-2xl font-bold">{prompt}</h2>
      <table className="table-auto">
        <thead>
          <tr className="">
            <th className="px-4 py-2 font-normal">Option</th>
            <th className="px-4 py-2 font-normal">Frequency</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(questionData).map((option) => {
            let isNormalOption = option !== 'otherInput' && option !== 'prompt';
            return (isNormalOption ?
              <tr key={option} className="odd:bg-gray-200">
                <td className="border px-4 py-2">{option}</td>
                <td className="border px-4 py-2">{questionData[option]}</td>
              </tr>
              : null
            );
          })}
        </tbody>
      </table>

    </div>
  );

}

    //     <div key={questionId}>
    //       <h2 className="text-2xl mt-6">Question {questionId}</h2>
    //       <h3>Counts:</h3>
    //       {Object.keys(report[questionId]).map((subOptionKey) => {
    //         if(subOptionKey !== 'otherInput') {
    //           return (
    //             <p key={subOptionKey}>
    //               {subOptionKey}: {report[questionId][subOptionKey]}
    //             </p>
    //           );
    //         } else return null;
    //       })}
    //       <h3 className="text-xl text-bold">Other Input:</h3>
    //       {report[questionId].otherInput.map((otherInputItem, index) => (
    //         <p key={index}>{otherInputItem}</p>
    //       ))}
    //     </div>
    //   ))}