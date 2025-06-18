import { InputJsonValue } from "../../types";
import { ScholarshipApplicationUpdateManyWithoutStudentsInput } from "./ScholarshipApplicationUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  kycDetails?: InputJsonValue;
  kycStatus?: "Option1" | null;
  lastName?: string | null;
  scholarshipApplications?: ScholarshipApplicationUpdateManyWithoutStudentsInput;
};
