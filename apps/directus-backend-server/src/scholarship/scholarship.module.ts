import { Module } from "@nestjs/common";
import { ScholarshipModuleBase } from "./base/scholarship.module.base";
import { ScholarshipService } from "./scholarship.service";
import { ScholarshipController } from "./scholarship.controller";
import { ScholarshipResolver } from "./scholarship.resolver";

@Module({
  imports: [ScholarshipModuleBase],
  controllers: [ScholarshipController],
  providers: [ScholarshipService, ScholarshipResolver],
  exports: [ScholarshipService],
})
export class ScholarshipModule {}
