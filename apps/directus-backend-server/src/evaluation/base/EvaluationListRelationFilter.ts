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
import { EvaluationWhereInput } from "./EvaluationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EvaluationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EvaluationWhereInput,
  })
  @ValidateNested()
  @Type(() => EvaluationWhereInput)
  @IsOptional()
  @Field(() => EvaluationWhereInput, {
    nullable: true,
  })
  every?: EvaluationWhereInput;

  @ApiProperty({
    required: false,
    type: () => EvaluationWhereInput,
  })
  @ValidateNested()
  @Type(() => EvaluationWhereInput)
  @IsOptional()
  @Field(() => EvaluationWhereInput, {
    nullable: true,
  })
  some?: EvaluationWhereInput;

  @ApiProperty({
    required: false,
    type: () => EvaluationWhereInput,
  })
  @ValidateNested()
  @Type(() => EvaluationWhereInput)
  @IsOptional()
  @Field(() => EvaluationWhereInput, {
    nullable: true,
  })
  none?: EvaluationWhereInput;
}
export { EvaluationListRelationFilter as EvaluationListRelationFilter };
