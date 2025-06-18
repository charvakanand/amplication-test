import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EvaluationService } from "./evaluation.service";
import { EvaluationControllerBase } from "./base/evaluation.controller.base";

@swagger.ApiTags("evaluations")
@common.Controller("evaluations")
export class EvaluationController extends EvaluationControllerBase {
  constructor(protected readonly service: EvaluationService) {
    super(service);
  }
}
