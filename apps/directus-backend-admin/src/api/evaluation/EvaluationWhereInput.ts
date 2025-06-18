import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ScholarshipApplicationWhereUniqueInput } from "../scholarshipApplication/ScholarshipApplicationWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type EvaluationWhereInput = {
  assessmentType?: "Option1";
  comments?: StringNullableFilter;
  evaluator?: StringNullableFilter;
  id?: StringFilter;
  scholarshipApplication?: ScholarshipApplicationWhereUniqueInput;
  score?: FloatNullableFilter;
};
