import { ScholarshipWhereInput } from "./ScholarshipWhereInput";
import { ScholarshipOrderByInput } from "./ScholarshipOrderByInput";

export type ScholarshipFindManyArgs = {
  where?: ScholarshipWhereInput;
  orderBy?: Array<ScholarshipOrderByInput>;
  skip?: number;
  take?: number;
};
