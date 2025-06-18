import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShortlistingStageService } from "./shortlistingStage.service";
import { ShortlistingStageControllerBase } from "./base/shortlistingStage.controller.base";

@swagger.ApiTags("shortlistingStages")
@common.Controller("shortlistingStages")
export class ShortlistingStageController extends ShortlistingStageControllerBase {
  constructor(protected readonly service: ShortlistingStageService) {
    super(service);
  }
}
