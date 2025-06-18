import { JsonValue } from "type-fest";
import { ScholarshipApplication } from "../scholarshipApplication/ScholarshipApplication";

export type Student = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  kycDetails: JsonValue;
  kycStatus?: "Option1" | null;
  lastName: string | null;
  scholarshipApplications?: Array<ScholarshipApplication>;
  updatedAt: Date;
};
