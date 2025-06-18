import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  kycDetails?: SortOrder;
  kycStatus?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
};
