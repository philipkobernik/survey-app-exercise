import prisma from "./prisma";

export default async function getSurveyConfig() {
  // get all survey responses
  let responses = await prisma.ResponseQuestion.findMany();
  console.log(responses);

  let report = {
    1: {
      prompt: "What is your favorite food?",
      otherInput: []
    },
    2: {
      prompt: "What is your favorite color?",
      otherInput: []
    }
  };

  responses.forEach((response) => {
    console.log('in each', response);
    if(report[response.questionId][response.option] === undefined) {
      report[response.questionId][response.option] = 1;
    } else {
      report[response.questionId][response.option]++;
    }
    if(response.option === "other") {
      report[response.questionId].otherInput.push(response.otherInput);
    }
  });

  console.log('the report', report);
  return report;
}