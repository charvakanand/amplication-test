import { ScholarshipApplicationWhereUniqueInput } from "../scholarshipApplication/ScholarshipApplicationWhereUniqueInput";

export type EvaluationCreateInput = {
  assessmentType?: "Option1" | null;
  comments?: string | null;
  evaluator?: string | null;
  scholarshipApplication?: ScholarshipApplicationWhereUniqueInput | null;
  score?: number | null;
};
