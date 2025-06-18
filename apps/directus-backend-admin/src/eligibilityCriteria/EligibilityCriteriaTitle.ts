import { EligibilityCriteria as TEligibilityCriteria } from "../api/eligibilityCriteria/EligibilityCriteria";

export const ELIGIBILITYCRITERIA_TITLE_FIELD = "academicBackground";

export const EligibilityCriteriaTitle = (
  record: TEligibilityCriteria
): string => {
  return record.academicBackground?.toString() || String(record.id);
};
