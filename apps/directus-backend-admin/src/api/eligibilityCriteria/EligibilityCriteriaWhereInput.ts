import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type EligibilityCriteriaWhereInput = {
  academicBackground?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  gender?: "Option1";
  id?: StringFilter;
  incomeBracket?: StringNullableFilter;
  maxAge?: IntNullableFilter;
  minAge?: IntNullableFilter;
  otherRequirements?: StringNullableFilter;
};
