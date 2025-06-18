import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OutreachPartnerServiceBase } from "./base/outreachPartner.service.base";

@Injectable()
export class OutreachPartnerService extends OutreachPartnerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
