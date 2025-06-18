import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StaffMemberServiceBase } from "./base/staffMember.service.base";

@Injectable()
export class StaffMemberService extends StaffMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
