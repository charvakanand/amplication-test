import { SortOrder } from "../../util/SortOrder";

export type EvaluationOrderByInput = {
  assessmentType?: SortOrder;
  comments?: SortOrder;
  createdAt?: SortOrder;
  evaluator?: SortOrder;
  id?: SortOrder;
  scholarshipApplicationId?: SortOrder;
  score?: SortOrder;
  updatedAt?: SortOrder;
};
