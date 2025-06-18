import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EvaluationServiceBase } from "./base/evaluation.service.base";

@Injectable()
export class EvaluationService extends EvaluationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
