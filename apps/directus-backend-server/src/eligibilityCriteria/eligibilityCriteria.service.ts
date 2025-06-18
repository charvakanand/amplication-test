import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EligibilityCriteriaServiceBase } from "./base/eligibilityCriteria.service.base";

@Injectable()
export class EligibilityCriteriaService extends EligibilityCriteriaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
