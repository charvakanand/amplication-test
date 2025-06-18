import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScholarshipApplicationServiceBase } from "./base/scholarshipApplication.service.base";

@Injectable()
export class ScholarshipApplicationService extends ScholarshipApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
