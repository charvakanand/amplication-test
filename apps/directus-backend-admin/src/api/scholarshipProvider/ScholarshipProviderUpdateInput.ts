import { ScholarshipUpdateManyWithoutScholarshipProvidersInput } from "./ScholarshipUpdateManyWithoutScholarshipProvidersInput";

export type ScholarshipProviderUpdateInput = {
  contactEmail?: string | null;
  name?: string | null;
  onboardingStatus?: "Option1" | null;
  scholarships?: ScholarshipUpdateManyWithoutScholarshipProvidersInput;
};
