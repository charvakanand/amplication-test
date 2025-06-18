import { JsonValue } from "type-fest";

export type OutreachPartner = {
  createdAt: Date;
  email: string | null;
  id: string;
  kycDetails: JsonValue;
  kycStatus?: "Option1" | null;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
