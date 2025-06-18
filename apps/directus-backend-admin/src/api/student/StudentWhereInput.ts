import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ScholarshipApplicationListRelationFilter } from "../scholarshipApplication/ScholarshipApplicationListRelationFilter";

export type StudentWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  kycDetails?: JsonFilter;
  kycStatus?: "Option1";
  lastName?: StringNullableFilter;
  scholarshipApplications?: ScholarshipApplicationListRelationFilter;
};
