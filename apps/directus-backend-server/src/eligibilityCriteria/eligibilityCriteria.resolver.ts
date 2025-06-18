import * as graphql from "@nestjs/graphql";
import { EligibilityCriteriaResolverBase } from "./base/eligibilityCriteria.resolver.base";
import { EligibilityCriteria } from "./base/EligibilityCriteria";
import { EligibilityCriteriaService } from "./eligibilityCriteria.service";

@graphql.Resolver(() => EligibilityCriteria)
export class EligibilityCriteriaResolver extends EligibilityCriteriaResolverBase {
  constructor(protected readonly service: EligibilityCriteriaService) {
    super(service);
  }
}
