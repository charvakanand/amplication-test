import * as graphql from "@nestjs/graphql";
import { StaffMemberResolverBase } from "./base/staffMember.resolver.base";
import { StaffMember } from "./base/StaffMember";
import { StaffMemberService } from "./staffMember.service";

@graphql.Resolver(() => StaffMember)
export class StaffMemberResolver extends StaffMemberResolverBase {
  constructor(protected readonly service: StaffMemberService) {
    super(service);
  }
}
