import { EvaluationUpdateManyWithoutScholarshipApplicationsInput } from "./EvaluationUpdateManyWithoutScholarshipApplicationsInput";
import { InputJsonValue } from "../../types";
import { ScholarshipWhereUniqueInput } from "../scholarship/ScholarshipWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ScholarshipApplicationUpdateInput = {
  evaluations?: EvaluationUpdateManyWithoutScholarshipApplicationsInput;
  isDraft?: boolean | null;
  responses?: InputJsonValue;
  scholarship?: ScholarshipWhereUniqueInput | null;
  status?: "Option1" | null;
  student?: StudentWhereUniqueInput | null;
};
