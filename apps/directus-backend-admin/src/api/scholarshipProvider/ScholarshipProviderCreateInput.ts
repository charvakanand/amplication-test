import { ScholarshipCreateNestedManyWithoutScholarshipProvidersInput } from "./ScholarshipCreateNestedManyWithoutScholarshipProvidersInput";

export type ScholarshipProviderCreateInput = {
  contactEmail?: string | null;
  name?: string | null;
  onboardingStatus?: "Option1" | null;
  scholarships?: ScholarshipCreateNestedManyWithoutScholarshipProvidersInput;
};
