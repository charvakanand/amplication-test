import { StaffMember as TStaffMember } from "../api/staffMember/StaffMember";

export const STAFFMEMBER_TITLE_FIELD = "firstName";

export const StaffMemberTitle = (record: TStaffMember): string => {
  return record.firstName?.toString() || String(record.id);
};
