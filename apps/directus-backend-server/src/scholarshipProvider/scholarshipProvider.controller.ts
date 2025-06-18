import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScholarshipProviderService } from "./scholarshipProvider.service";
import { ScholarshipProviderControllerBase } from "./base/scholarshipProvider.controller.base";

@swagger.ApiTags("scholarshipProviders")
@common.Controller("scholarshipProviders")
export class ScholarshipProviderController extends ScholarshipProviderControllerBase {
  constructor(protected readonly service: ScholarshipProviderService) {
    super(service);
  }
}
