import { Module } from "@nestjs/common";
import { ScholarshipProviderModuleBase } from "./base/scholarshipProvider.module.base";
import { ScholarshipProviderService } from "./scholarshipProvider.service";
import { ScholarshipProviderController } from "./scholarshipProvider.controller";
import { ScholarshipProviderResolver } from "./scholarshipProvider.resolver";

@Module({
  imports: [ScholarshipProviderModuleBase],
  controllers: [ScholarshipProviderController],
  providers: [ScholarshipProviderService, ScholarshipProviderResolver],
  exports: [ScholarshipProviderService],
})
export class ScholarshipProviderModule {}
