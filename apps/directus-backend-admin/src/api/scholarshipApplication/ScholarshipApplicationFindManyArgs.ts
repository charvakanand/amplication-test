import { ScholarshipApplicationWhereInput } from "./ScholarshipApplicationWhereInput";
import { ScholarshipApplicationOrderByInput } from "./ScholarshipApplicationOrderByInput";

export type ScholarshipApplicationFindManyArgs = {
  where?: ScholarshipApplicationWhereInput;
  orderBy?: Array<ScholarshipApplicationOrderByInput>;
  skip?: number;
  take?: number;
};
