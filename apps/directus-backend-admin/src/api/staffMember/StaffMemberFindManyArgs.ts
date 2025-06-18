import { StaffMemberWhereInput } from "./StaffMemberWhereInput";
import { StaffMemberOrderByInput } from "./StaffMemberOrderByInput";

export type StaffMemberFindManyArgs = {
  where?: StaffMemberWhereInput;
  orderBy?: Array<StaffMemberOrderByInput>;
  skip?: number;
  take?: number;
};
