import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ScholarshipApplicationListRelationFilter } from "../scholarshipApplication/ScholarshipApplicationListRelationFilter";
import { ScholarshipProviderWhereUniqueInput } from "../scholarshipProvider/ScholarshipProviderWhereUniqueInput";

export type ScholarshipWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  isPublished?: BooleanNullableFilter;
  scholarshipApplications?: ScholarshipApplicationListRelationFilter;
  scholarshipProvider?: ScholarshipProviderWhereUniqueInput;
  shortlistingStage?: StringNullableFilter;
  title?: StringNullableFilter;
};
