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
import { StaffMemberCreateInput } from "./StaffMemberCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateStaffMemberArgs {
  @ApiProperty({
    required: true,
    type: () => StaffMemberCreateInput,
  })
  @ValidateNested()
  @Type(() => StaffMemberCreateInput)
  @Field(() => StaffMemberCreateInput, { nullable: false })
  data!: StaffMemberCreateInput;
}

export { CreateStaffMemberArgs as CreateStaffMemberArgs };
