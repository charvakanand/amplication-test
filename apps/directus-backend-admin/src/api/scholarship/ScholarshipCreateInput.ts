import { ScholarshipApplicationCreateNestedManyWithoutScholarshipsInput } from "./ScholarshipApplicationCreateNestedManyWithoutScholarshipsInput";
import { ScholarshipProviderWhereUniqueInput } from "../scholarshipProvider/ScholarshipProviderWhereUniqueInput";

export type ScholarshipCreateInput = {
  description?: string | null;
  isPublished?: boolean | null;
  scholarshipApplications?: ScholarshipApplicationCreateNestedManyWithoutScholarshipsInput;
  scholarshipProvider?: ScholarshipProviderWhereUniqueInput | null;
  shortlistingStage?: string | null;
  title?: string | null;
};
