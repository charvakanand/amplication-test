import { Scholarship as TScholarship } from "../api/scholarship/Scholarship";

export const SCHOLARSHIP_TITLE_FIELD = "title";

export const ScholarshipTitle = (record: TScholarship): string => {
  return record.title?.toString() || String(record.id);
};
