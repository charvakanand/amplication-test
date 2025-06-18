import { OutreachPartnerWhereInput } from "./OutreachPartnerWhereInput";
import { OutreachPartnerOrderByInput } from "./OutreachPartnerOrderByInput";

export type OutreachPartnerFindManyArgs = {
  where?: OutreachPartnerWhereInput;
  orderBy?: Array<OutreachPartnerOrderByInput>;
  skip?: number;
  take?: number;
};
