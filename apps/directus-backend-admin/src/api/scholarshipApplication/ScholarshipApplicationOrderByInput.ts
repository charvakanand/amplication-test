import { SortOrder } from "../../util/SortOrder";

export type ScholarshipApplicationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isDraft?: SortOrder;
  responses?: SortOrder;
  scholarshipId?: SortOrder;
  status?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
