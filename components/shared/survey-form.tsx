import { useState } from "react";
import { SurveyConfigType } from "types";
import axios from 'axios';
import { useRouter } from "next/router";

interface surveyStateType {
  [questionId: number]: {
    option: string;
    otherInput: string;
  }
}

interface Props {
  surveyConfig: SurveyConfigType;
}


export default function SurveyForm({ surveyConfig }: Props) {
  const router = useRouter();
  const [formState, setFormState] = useState<surveyStateType>({
    1: {
      option: 'fries',
      otherInput: '',
    },
    2: {
      option: 'red',
      otherInput: '',
    }
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('submit', formState);
    axios.post('/api/survey-response', {
      surveyId: surveyConfig.surveyId,
      responses: formState,
    }, {
    })
      .then((response) => {
        console.log('response', response);
        router.push('/responses');
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  const handleSelectChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: {
        option: event.target.value,
        otherInput: "",
      }
    });
  }

  const handleTextInputChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: {
        option: 'other',
        otherInput: event.target.value,
      }
    });
  }

  return (
    <div className="max-w-xl px-5">
      <h2 className="text-2xl font-bold">Survey Form</h2>
      <form onSubmit={handleSubmit}>
      { surveyConfig.questions.map((question, index) => {
        return (
          <div key={index} className="max-w-xl px-5 mt-6">
            <h2 className="text-2xl mb-2">{index+1}. {question.prompt}</h2>
            <select name={question.id} value={formState[question.id].option} onChange={handleSelectChange}>
              { [
                  ...question.options.map((option, index) => {
                    return (
                      <option key={index} value={option.label}>{option.label}</option>
                    )
                  }),
                  ...(question.allowOther ? [<option key="other" value="other">other</option>] : [])
                ] }
            </select>
            { formState[question.id].option === 'other' && (
              <input name={question.id} type="text" value={formState[question.id].otherInput} onChange={handleTextInputChange} />
            )}
          </div>
        )
      })}
      <button type="submit" className="mt-6 border px-4 py-2">Submit</button>
      </form>
    </div>
  )
}
