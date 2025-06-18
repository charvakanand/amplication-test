import * as graphql from "@nestjs/graphql";
import { OutreachPartnerResolverBase } from "./base/outreachPartner.resolver.base";
import { OutreachPartner } from "./base/OutreachPartner";
import { OutreachPartnerService } from "./outreachPartner.service";

@graphql.Resolver(() => OutreachPartner)
export class OutreachPartnerResolver extends OutreachPartnerResolverBase {
  constructor(protected readonly service: OutreachPartnerService) {
    super(service);
  }
}
