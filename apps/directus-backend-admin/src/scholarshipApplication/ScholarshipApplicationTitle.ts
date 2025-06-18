import { ScholarshipApplication as TScholarshipApplication } from "../api/scholarshipApplication/ScholarshipApplication";

export const SCHOLARSHIPAPPLICATION_TITLE_FIELD = "id";

export const ScholarshipApplicationTitle = (
  record: TScholarshipApplication
): string => {
  return record.id?.toString() || String(record.id);
};
