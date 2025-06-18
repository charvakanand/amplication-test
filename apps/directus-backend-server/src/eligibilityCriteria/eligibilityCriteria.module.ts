import { Module } from "@nestjs/common";
import { EligibilityCriteriaModuleBase } from "./base/eligibilityCriteria.module.base";
import { EligibilityCriteriaService } from "./eligibilityCriteria.service";
import { EligibilityCriteriaController } from "./eligibilityCriteria.controller";
import { EligibilityCriteriaResolver } from "./eligibilityCriteria.resolver";

@Module({
  imports: [EligibilityCriteriaModuleBase],
  controllers: [EligibilityCriteriaController],
  providers: [EligibilityCriteriaService, EligibilityCriteriaResolver],
  exports: [EligibilityCriteriaService],
})
export class EligibilityCriteriaModule {}
