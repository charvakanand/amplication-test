import { Module } from "@nestjs/common";
import { EvaluationModuleBase } from "./base/evaluation.module.base";
import { EvaluationService } from "./evaluation.service";
import { EvaluationController } from "./evaluation.controller";
import { EvaluationResolver } from "./evaluation.resolver";

@Module({
  imports: [EvaluationModuleBase],
  controllers: [EvaluationController],
  providers: [EvaluationService, EvaluationResolver],
  exports: [EvaluationService],
})
export class EvaluationModule {}
