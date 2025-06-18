import { Module } from "@nestjs/common";
import { ShortlistingStageModuleBase } from "./base/shortlistingStage.module.base";
import { ShortlistingStageService } from "./shortlistingStage.service";
import { ShortlistingStageController } from "./shortlistingStage.controller";
import { ShortlistingStageResolver } from "./shortlistingStage.resolver";

@Module({
  imports: [ShortlistingStageModuleBase],
  controllers: [ShortlistingStageController],
  providers: [ShortlistingStageService, ShortlistingStageResolver],
  exports: [ShortlistingStageService],
})
export class ShortlistingStageModule {}
