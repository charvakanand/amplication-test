import * as graphql from "@nestjs/graphql";
import { ScholarshipProviderResolverBase } from "./base/scholarshipProvider.resolver.base";
import { ScholarshipProvider } from "./base/ScholarshipProvider";
import { ScholarshipProviderService } from "./scholarshipProvider.service";

@graphql.Resolver(() => ScholarshipProvider)
export class ScholarshipProviderResolver extends ScholarshipProviderResolverBase {
  constructor(protected readonly service: ScholarshipProviderService) {
    super(service);
  }
}
