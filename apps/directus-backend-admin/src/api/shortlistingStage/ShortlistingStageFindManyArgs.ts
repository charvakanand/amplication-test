import { ShortlistingStageWhereInput } from "./ShortlistingStageWhereInput";
import { ShortlistingStageOrderByInput } from "./ShortlistingStageOrderByInput";

export type ShortlistingStageFindManyArgs = {
  where?: ShortlistingStageWhereInput;
  orderBy?: Array<ShortlistingStageOrderByInput>;
  skip?: number;
  take?: number;
};
