import { InputJsonValue } from "../../types";
import { ScholarshipApplicationCreateNestedManyWithoutStudentsInput } from "./ScholarshipApplicationCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  email?: string | null;
  firstName?: string | null;
  kycDetails?: InputJsonValue;
  kycStatus?: "Option1" | null;
  lastName?: string | null;
  scholarshipApplications?: ScholarshipApplicationCreateNestedManyWithoutStudentsInput;
};
