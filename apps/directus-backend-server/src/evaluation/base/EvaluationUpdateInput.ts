/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumEvaluationAssessmentType } from "./EnumEvaluationAssessmentType";

import {
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
  IsNumber,
  Min,
  Max,
} from "class-validator";

import { ScholarshipApplicationWhereUniqueInput } from "../../scholarshipApplication/base/ScholarshipApplicationWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class EvaluationUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumEvaluationAssessmentType,
  })
  @IsEnum(EnumEvaluationAssessmentType)
  @IsOptional()
  @Field(() => EnumEvaluationAssessmentType, {
    nullable: true,
  })
  assessmentType?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  comments?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  evaluator?: string | null;

  @ApiProperty({
    required: false,
    type: () => ScholarshipApplicationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ScholarshipApplicationWhereUniqueInput)
  @IsOptional()
  @Field(() => ScholarshipApplicationWhereUniqueInput, {
    nullable: true,
  })
  scholarshipApplication?: ScholarshipApplicationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  score?: number | null;
}

export { EvaluationUpdateInput as EvaluationUpdateInput };
