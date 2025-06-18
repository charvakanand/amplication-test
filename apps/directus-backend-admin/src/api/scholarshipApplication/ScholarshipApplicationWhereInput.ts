import { EvaluationListRelationFilter } from "../evaluation/EvaluationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ScholarshipWhereUniqueInput } from "../scholarship/ScholarshipWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ScholarshipApplicationWhereInput = {
  evaluations?: EvaluationListRelationFilter;
  id?: StringFilter;
  isDraft?: BooleanNullableFilter;
  responses?: JsonFilter;
  scholarship?: ScholarshipWhereUniqueInput;
  status?: "Option1";
  student?: StudentWhereUniqueInput;
};
