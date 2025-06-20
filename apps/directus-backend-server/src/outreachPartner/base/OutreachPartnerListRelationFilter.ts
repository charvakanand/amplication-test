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
import { OutreachPartnerWhereInput } from "./OutreachPartnerWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OutreachPartnerListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OutreachPartnerWhereInput,
  })
  @ValidateNested()
  @Type(() => OutreachPartnerWhereInput)
  @IsOptional()
  @Field(() => OutreachPartnerWhereInput, {
    nullable: true,
  })
  every?: OutreachPartnerWhereInput;

  @ApiProperty({
    required: false,
    type: () => OutreachPartnerWhereInput,
  })
  @ValidateNested()
  @Type(() => OutreachPartnerWhereInput)
  @IsOptional()
  @Field(() => OutreachPartnerWhereInput, {
    nullable: true,
  })
  some?: OutreachPartnerWhereInput;

  @ApiProperty({
    required: false,
    type: () => OutreachPartnerWhereInput,
  })
  @ValidateNested()
  @Type(() => OutreachPartnerWhereInput)
  @IsOptional()
  @Field(() => OutreachPartnerWhereInput, {
    nullable: true,
  })
  none?: OutreachPartnerWhereInput;
}
export { OutreachPartnerListRelationFilter as OutreachPartnerListRelationFilter };
