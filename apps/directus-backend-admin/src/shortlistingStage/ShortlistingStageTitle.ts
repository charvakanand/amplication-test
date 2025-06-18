import { ShortlistingStage as TShortlistingStage } from "../api/shortlistingStage/ShortlistingStage";

export const SHORTLISTINGSTAGE_TITLE_FIELD = "name";

export const ShortlistingStageTitle = (record: TShortlistingStage): string => {
  return record.name?.toString() || String(record.id);
};
