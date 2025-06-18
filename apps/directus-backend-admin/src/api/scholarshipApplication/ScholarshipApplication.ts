import { Evaluation } from "../evaluation/Evaluation";
import { JsonValue } from "type-fest";
import { Scholarship } from "../scholarship/Scholarship";
import { Student } from "../student/Student";

export type ScholarshipApplication = {
  createdAt: Date;
  evaluations?: Array<Evaluation>;
  id: string;
  isDraft: boolean | null;
  responses: JsonValue;
  scholarship?: Scholarship | null;
  status?: "Option1" | null;
  student?: Student | null;
  updatedAt: Date;
};
