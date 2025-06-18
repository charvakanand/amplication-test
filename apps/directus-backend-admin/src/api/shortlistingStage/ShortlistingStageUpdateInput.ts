import { InputJsonValue } from "../../types";

export type ShortlistingStageUpdateInput = {
  createdBy?: string | null;
  definedBy?: "Option1" | null;
  description?: string | null;
  name?: string | null;
  order?: number | null;
  parameters?: InputJsonValue;
  typeField?: "Option1" | null;
};
