import { Evaluation as TEvaluation } from "../api/evaluation/Evaluation";

export const EVALUATION_TITLE_FIELD = "evaluator";

export const EvaluationTitle = (record: TEvaluation): string => {
  return record.evaluator?.toString() || String(record.id);
};
