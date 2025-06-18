import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EligibilityCriteriaService } from "./eligibilityCriteria.service";
import { EligibilityCriteriaControllerBase } from "./base/eligibilityCriteria.controller.base";

@swagger.ApiTags("eligibilityCriteria")
@common.Controller("eligibilityCriteria")
export class EligibilityCriteriaController extends EligibilityCriteriaControllerBase {
  constructor(protected readonly service: EligibilityCriteriaService) {
    super(service);
  }
}
