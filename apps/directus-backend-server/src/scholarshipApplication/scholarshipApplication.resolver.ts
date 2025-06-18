import * as graphql from "@nestjs/graphql";
import { ScholarshipApplicationResolverBase } from "./base/scholarshipApplication.resolver.base";
import { ScholarshipApplication } from "./base/ScholarshipApplication";
import { ScholarshipApplicationService } from "./scholarshipApplication.service";

@graphql.Resolver(() => ScholarshipApplication)
export class ScholarshipApplicationResolver extends ScholarshipApplicationResolverBase {
  constructor(protected readonly service: ScholarshipApplicationService) {
    super(service);
  }
}
