import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OutreachPartnerService } from "./outreachPartner.service";
import { OutreachPartnerControllerBase } from "./base/outreachPartner.controller.base";

@swagger.ApiTags("outreachPartners")
@common.Controller("outreachPartners")
export class OutreachPartnerController extends OutreachPartnerControllerBase {
  constructor(protected readonly service: OutreachPartnerService) {
    super(service);
  }
}
