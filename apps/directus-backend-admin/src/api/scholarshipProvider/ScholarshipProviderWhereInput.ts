import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ScholarshipListRelationFilter } from "../scholarship/ScholarshipListRelationFilter";

export type ScholarshipProviderWhereInput = {
  contactEmail?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  onboardingStatus?: "Option1";
  scholarships?: ScholarshipListRelationFilter;
};
