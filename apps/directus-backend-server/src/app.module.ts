import { Module } from "@nestjs/common";
import { ScholarshipApplicationModule } from "./scholarshipApplication/scholarshipApplication.module";
import { ScholarshipModule } from "./scholarship/scholarship.module";
import { StaffMemberModule } from "./staffMember/staffMember.module";
import { EvaluationModule } from "./evaluation/evaluation.module";
import { ScholarshipProviderModule } from "./scholarshipProvider/scholarshipProvider.module";
import { StudentModule } from "./student/student.module";
import { ShortlistingStageModule } from "./shortlistingStage/shortlistingStage.module";
import { EligibilityCriteriaModule } from "./eligibilityCriteria/eligibilityCriteria.module";
import { OutreachPartnerModule } from "./outreachPartner/outreachPartner.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    ScholarshipApplicationModule,
    ScholarshipModule,
    StaffMemberModule,
    EvaluationModule,
    ScholarshipProviderModule,
    StudentModule,
    ShortlistingStageModule,
    EligibilityCriteriaModule,
    OutreachPartnerModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
