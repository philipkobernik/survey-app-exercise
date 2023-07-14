import { NextRequest, NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export default async function handler(req: NextRequest, res: NextResponse) {
  switch(req.method) {
    case "POST":
      let newResponse = await prisma.SurveyResponse.create({
        data: {
          surveyId: req.body?.surveyId,
          questions: {
            create: Object.keys(req.body?.responses).map((questionId) => {
              let selectedOption = req.body?.responses[questionId].option;
              let otherInput = req.body?.responses[questionId].otherInput;
              return {
                questionId: parseInt(questionId),
                option: selectedOption,
                otherInput: selectedOption === "other" ? otherInput : null,
              };
            })
          }
        },
      });
      return res.status(200).json(newResponse);
      break;

    case "GET":
      // return getSurveyConfig(req, res);

    default:
      return res.status(405).send();
      break;
  }
}

// res.status(200).json(getSurveyConfig());