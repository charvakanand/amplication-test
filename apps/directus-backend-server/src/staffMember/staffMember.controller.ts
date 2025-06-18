import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StaffMemberService } from "./staffMember.service";
import { StaffMemberControllerBase } from "./base/staffMember.controller.base";

@swagger.ApiTags("staffMembers")
@common.Controller("staffMembers")
export class StaffMemberController extends StaffMemberControllerBase {
  constructor(protected readonly service: StaffMemberService) {
    super(service);
  }
}
