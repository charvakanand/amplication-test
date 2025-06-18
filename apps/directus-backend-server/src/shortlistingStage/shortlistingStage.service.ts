import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShortlistingStageServiceBase } from "./base/shortlistingStage.service.base";

@Injectable()
export class ShortlistingStageService extends ShortlistingStageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
