import { InputJsonValue } from "../../types";

export type OutreachPartnerUpdateInput = {
  email?: string | null;
  kycDetails?: InputJsonValue;
  kycStatus?: "Option1" | null;
  name?: string | null;
  phone?: string | null;
};
