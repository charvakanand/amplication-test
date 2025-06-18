import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScholarshipProviderServiceBase } from "./base/scholarshipProvider.service.base";

@Injectable()
export class ScholarshipProviderService extends ScholarshipProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
