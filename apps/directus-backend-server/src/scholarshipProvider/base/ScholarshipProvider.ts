/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsDate,
  MaxLength,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumScholarshipProviderOnboardingStatus } from "./EnumScholarshipProviderOnboardingStatus";
import { Scholarship } from "../../scholarship/base/Scholarship";

@ObjectType()
class ScholarshipProvider {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  contactEmail!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
  name!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumScholarshipProviderOnboardingStatus,
  })
  @IsEnum(EnumScholarshipProviderOnboardingStatus)
  @IsOptional()
  @Field(() => EnumScholarshipProviderOnboardingStatus, {
    nullable: true,
  })
  onboardingStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => [Scholarship],
  })
  @ValidateNested()
  @Type(() => Scholarship)
  @IsOptional()
  scholarships?: Array<Scholarship>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { ScholarshipProvider as ScholarshipProvider };
