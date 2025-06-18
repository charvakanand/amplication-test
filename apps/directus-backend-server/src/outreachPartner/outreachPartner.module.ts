import { Module } from "@nestjs/common";
import { OutreachPartnerModuleBase } from "./base/outreachPartner.module.base";
import { OutreachPartnerService } from "./outreachPartner.service";
import { OutreachPartnerController } from "./outreachPartner.controller";
import { OutreachPartnerResolver } from "./outreachPartner.resolver";

@Module({
  imports: [OutreachPartnerModuleBase],
  controllers: [OutreachPartnerController],
  providers: [OutreachPartnerService, OutreachPartnerResolver],
  exports: [OutreachPartnerService],
})
export class OutreachPartnerModule {}
