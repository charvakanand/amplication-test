import { SortOrder } from "../../util/SortOrder";

export type ShortlistingStageOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  definedBy?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  order?: SortOrder;
  parameters?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
