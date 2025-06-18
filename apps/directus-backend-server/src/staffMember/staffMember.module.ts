import { Module } from "@nestjs/common";
import { StaffMemberModuleBase } from "./base/staffMember.module.base";
import { StaffMemberService } from "./staffMember.service";
import { StaffMemberController } from "./staffMember.controller";
import { StaffMemberResolver } from "./staffMember.resolver";

@Module({
  imports: [StaffMemberModuleBase],
  controllers: [StaffMemberController],
  providers: [StaffMemberService, StaffMemberResolver],
  exports: [StaffMemberService],
})
export class StaffMemberModule {}
