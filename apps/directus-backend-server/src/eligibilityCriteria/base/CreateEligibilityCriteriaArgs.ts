/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EligibilityCriteriaCreateInput } from "./EligibilityCriteriaCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateEligibilityCriteriaArgs {
  @ApiProperty({
    required: true,
    type: () => EligibilityCriteriaCreateInput,
  })
  @ValidateNested()
  @Type(() => EligibilityCriteriaCreateInput)
  @Field(() => EligibilityCriteriaCreateInput, { nullable: false })
  data!: EligibilityCriteriaCreateInput;
}

export { CreateEligibilityCriteriaArgs as CreateEligibilityCriteriaArgs };
