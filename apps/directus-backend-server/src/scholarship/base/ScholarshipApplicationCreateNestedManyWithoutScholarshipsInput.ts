/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ScholarshipApplicationWhereUniqueInput } from "../../scholarshipApplication/base/ScholarshipApplicationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ScholarshipApplicationCreateNestedManyWithoutScholarshipsInput {
  @Field(() => [ScholarshipApplicationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScholarshipApplicationWhereUniqueInput],
  })
  connect?: Array<ScholarshipApplicationWhereUniqueInput>;
}

export { ScholarshipApplicationCreateNestedManyWithoutScholarshipsInput as ScholarshipApplicationCreateNestedManyWithoutScholarshipsInput };
