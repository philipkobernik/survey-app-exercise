import { NextRequest, NextResponse } from "next/server";
import getSurveyConfig from "@/lib/get-survey-config";

export default async function handler(req: NextRequest, res: NextResponse) {
  res.status(200).json(getSurveyConfig());
}