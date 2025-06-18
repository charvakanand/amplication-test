import * as graphql from "@nestjs/graphql";
import { ScholarshipResolverBase } from "./base/scholarship.resolver.base";
import { Scholarship } from "./base/Scholarship";
import { ScholarshipService } from "./scholarship.service";

@graphql.Resolver(() => Scholarship)
export class ScholarshipResolver extends ScholarshipResolverBase {
  constructor(protected readonly service: ScholarshipService) {
    super(service);
  }
}
