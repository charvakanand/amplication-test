import { ScholarshipProviderWhereInput } from "./ScholarshipProviderWhereInput";
import { ScholarshipProviderOrderByInput } from "./ScholarshipProviderOrderByInput";

export type ScholarshipProviderFindManyArgs = {
  where?: ScholarshipProviderWhereInput;
  orderBy?: Array<ScholarshipProviderOrderByInput>;
  skip?: number;
  take?: number;
};
