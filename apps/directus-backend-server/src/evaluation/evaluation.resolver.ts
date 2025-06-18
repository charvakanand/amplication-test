import * as graphql from "@nestjs/graphql";
import { EvaluationResolverBase } from "./base/evaluation.resolver.base";
import { Evaluation } from "./base/Evaluation";
import { EvaluationService } from "./evaluation.service";

@graphql.Resolver(() => Evaluation)
export class EvaluationResolver extends EvaluationResolverBase {
  constructor(protected readonly service: EvaluationService) {
    super(service);
  }
}
