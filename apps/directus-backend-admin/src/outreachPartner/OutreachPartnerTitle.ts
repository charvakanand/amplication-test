import { OutreachPartner as TOutreachPartner } from "../api/outreachPartner/OutreachPartner";

export const OUTREACHPARTNER_TITLE_FIELD = "name";

export const OutreachPartnerTitle = (record: TOutreachPartner): string => {
  return record.name?.toString() || String(record.id);
};
