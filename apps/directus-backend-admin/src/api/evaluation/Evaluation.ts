import { ScholarshipApplication } from "../scholarshipApplication/ScholarshipApplication";

export type Evaluation = {
  assessmentType?: "Option1" | null;
  comments: string | null;
  createdAt: Date;
  evaluator: string | null;
  id: string;
  scholarshipApplication?: ScholarshipApplication | null;
  score: number | null;
  updatedAt: Date;
};
