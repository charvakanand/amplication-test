import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScholarshipApplicationService } from "./scholarshipApplication.service";
import { ScholarshipApplicationControllerBase } from "./base/scholarshipApplication.controller.base";

@swagger.ApiTags("scholarshipApplications")
@common.Controller("scholarshipApplications")
export class ScholarshipApplicationController extends ScholarshipApplicationControllerBase {
  constructor(protected readonly service: ScholarshipApplicationService) {
    super(service);
  }
}
