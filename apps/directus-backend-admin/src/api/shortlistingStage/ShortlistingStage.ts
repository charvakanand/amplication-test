import { JsonValue } from "type-fest";

export type ShortlistingStage = {
  createdAt: Date;
  createdBy: string | null;
  definedBy?: "Option1" | null;
  description: string | null;
  id: string;
  name: string | null;
  order: number | null;
  parameters: JsonValue;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
