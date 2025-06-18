import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScholarshipServiceBase } from "./base/scholarship.service.base";

@Injectable()
export class ScholarshipService extends ScholarshipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
