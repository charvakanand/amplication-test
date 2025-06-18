import { Module } from "@nestjs/common";
import { ScholarshipApplicationModuleBase } from "./base/scholarshipApplication.module.base";
import { ScholarshipApplicationService } from "./scholarshipApplication.service";
import { ScholarshipApplicationController } from "./scholarshipApplication.controller";
import { ScholarshipApplicationResolver } from "./scholarshipApplication.resolver";

@Module({
  imports: [ScholarshipApplicationModuleBase],
  controllers: [ScholarshipApplicationController],
  providers: [ScholarshipApplicationService, ScholarshipApplicationResolver],
  exports: [ScholarshipApplicationService],
})
export class ScholarshipApplicationModule {}
