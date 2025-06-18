import { ScholarshipProvider as TScholarshipProvider } from "../api/scholarshipProvider/ScholarshipProvider";

export const SCHOLARSHIPPROVIDER_TITLE_FIELD = "name";

export const ScholarshipProviderTitle = (
  record: TScholarshipProvider
): string => {
  return record.name?.toString() || String(record.id);
};
