import { EvaluationWhereInput } from "./EvaluationWhereInput";
import { EvaluationOrderByInput } from "./EvaluationOrderByInput";

export type EvaluationFindManyArgs = {
  where?: EvaluationWhereInput;
  orderBy?: Array<EvaluationOrderByInput>;
  skip?: number;
  take?: number;
};
