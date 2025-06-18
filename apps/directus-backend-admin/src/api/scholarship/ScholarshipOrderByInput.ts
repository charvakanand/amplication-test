import { SortOrder } from "../../util/SortOrder";

export type ScholarshipOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isPublished?: SortOrder;
  scholarshipProviderId?: SortOrder;
  shortlistingStage?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
