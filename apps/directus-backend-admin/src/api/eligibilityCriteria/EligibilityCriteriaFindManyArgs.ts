import { EligibilityCriteriaWhereInput } from "./EligibilityCriteriaWhereInput";
import { EligibilityCriteriaOrderByInput } from "./EligibilityCriteriaOrderByInput";

export type EligibilityCriteriaFindManyArgs = {
  where?: EligibilityCriteriaWhereInput;
  orderBy?: Array<EligibilityCriteriaOrderByInput>;
  skip?: number;
  take?: number;
};
