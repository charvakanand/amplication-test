import * as graphql from "@nestjs/graphql";
import { ShortlistingStageResolverBase } from "./base/shortlistingStage.resolver.base";
import { ShortlistingStage } from "./base/ShortlistingStage";
import { ShortlistingStageService } from "./shortlistingStage.service";

@graphql.Resolver(() => ShortlistingStage)
export class ShortlistingStageResolver extends ShortlistingStageResolverBase {
  constructor(protected readonly service: ShortlistingStageService) {
    super(service);
  }
}
