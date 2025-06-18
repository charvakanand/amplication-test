import { EvaluationCreateNestedManyWithoutScholarshipApplicationsInput } from "./EvaluationCreateNestedManyWithoutScholarshipApplicationsInput";
import { InputJsonValue } from "../../types";
import { ScholarshipWhereUniqueInput } from "../scholarship/ScholarshipWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ScholarshipApplicationCreateInput = {
  evaluations?: EvaluationCreateNestedManyWithoutScholarshipApplicationsInput;
  isDraft?: boolean | null;
  responses?: InputJsonValue;
  scholarship?: ScholarshipWhereUniqueInput | null;
  status?: "Option1" | null;
  student?: StudentWhereUniqueInput | null;
};
