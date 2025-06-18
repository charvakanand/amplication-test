import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScholarshipService } from "./scholarship.service";
import { ScholarshipControllerBase } from "./base/scholarship.controller.base";

@swagger.ApiTags("scholarships")
@common.Controller("scholarships")
export class ScholarshipController extends ScholarshipControllerBase {
  constructor(protected readonly service: ScholarshipService) {
    super(service);
  }
}
