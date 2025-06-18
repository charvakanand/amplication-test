import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ShortlistingStageWhereInput = {
  createdBy?: StringNullableFilter;
  definedBy?: "Option1";
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  order?: IntNullableFilter;
  parameters?: JsonFilter;
  typeField?: "Option1";
};
