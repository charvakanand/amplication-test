import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type OutreachPartnerWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  kycDetails?: JsonFilter;
  kycStatus?: "Option1";
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
