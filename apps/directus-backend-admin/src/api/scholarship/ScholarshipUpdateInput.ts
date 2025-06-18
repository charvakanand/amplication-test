import { ScholarshipApplicationUpdateManyWithoutScholarshipsInput } from "./ScholarshipApplicationUpdateManyWithoutScholarshipsInput";
import { ScholarshipProviderWhereUniqueInput } from "../scholarshipProvider/ScholarshipProviderWhereUniqueInput";

export type ScholarshipUpdateInput = {
  description?: string | null;
  isPublished?: boolean | null;
  scholarshipApplications?: ScholarshipApplicationUpdateManyWithoutScholarshipsInput;
  scholarshipProvider?: ScholarshipProviderWhereUniqueInput | null;
  shortlistingStage?: string | null;
  title?: string | null;
};
