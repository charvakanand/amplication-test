import { ScholarshipApplication } from "../scholarshipApplication/ScholarshipApplication";
import { ScholarshipProvider } from "../scholarshipProvider/ScholarshipProvider";

export type Scholarship = {
  createdAt: Date;
  description: string | null;
  id: string;
  isPublished: boolean | null;
  scholarshipApplications?: Array<ScholarshipApplication>;
  scholarshipProvider?: ScholarshipProvider | null;
  shortlistingStage: string | null;
  title: string | null;
  updatedAt: Date;
};
