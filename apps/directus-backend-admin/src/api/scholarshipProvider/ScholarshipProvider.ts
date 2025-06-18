import { Scholarship } from "../scholarship/Scholarship";

export type ScholarshipProvider = {
  contactEmail: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  onboardingStatus?: "Option1" | null;
  scholarships?: Array<Scholarship>;
  updatedAt: Date;
};
