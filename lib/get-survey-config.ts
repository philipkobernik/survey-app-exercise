export default function getSurveyConfig() {
  return {
    surveyId: 1,
    questions:
      [ 
        {
          id: 1,
          prompt: "What is your favorite food?",
          type: "mc",
          options: [
            { label: "fries" },
            { label: "pizza" },
            { label: "chicken" },
            { label: "salad" },
          ],
          allowOther: true
        },
        {
          id: 2,
          prompt: "What is your favorite color?",
          type: "mc",
          options: [
            { label: "red" },
            { label: "orange" },
            { label: "yellow" },
            { label: "green" },
            { label: "blue" },
            { label: "indigo" },
            { label: "violet" },
          ],
          allowOther: true
        },
      ]
    };
}