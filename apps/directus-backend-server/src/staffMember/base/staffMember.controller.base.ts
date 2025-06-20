/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { StaffMemberService } from "../staffMember.service";
import { StaffMemberCreateInput } from "./StaffMemberCreateInput";
import { StaffMember } from "./StaffMember";
import { StaffMemberFindManyArgs } from "./StaffMemberFindManyArgs";
import { StaffMemberWhereUniqueInput } from "./StaffMemberWhereUniqueInput";
import { StaffMemberUpdateInput } from "./StaffMemberUpdateInput";

export class StaffMemberControllerBase {
  constructor(protected readonly service: StaffMemberService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: StaffMember })
  async createStaffMember(
    @common.Body() data: StaffMemberCreateInput
  ): Promise<StaffMember> {
    return await this.service.createStaffMember({
      data: data,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        role: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [StaffMember] })
  @ApiNestedQuery(StaffMemberFindManyArgs)
  async staffMembers(@common.Req() request: Request): Promise<StaffMember[]> {
    const args = plainToClass(StaffMemberFindManyArgs, request.query);
    return this.service.staffMembers({
      ...args,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        role: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: StaffMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async staffMember(
    @common.Param() params: StaffMemberWhereUniqueInput
  ): Promise<StaffMember | null> {
    const result = await this.service.staffMember({
      where: params,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        role: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: StaffMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStaffMember(
    @common.Param() params: StaffMemberWhereUniqueInput,
    @common.Body() data: StaffMemberUpdateInput
  ): Promise<StaffMember | null> {
    try {
      return await this.service.updateStaffMember({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          role: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: StaffMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStaffMember(
    @common.Param() params: StaffMemberWhereUniqueInput
  ): Promise<StaffMember | null> {
    try {
      return await this.service.deleteStaffMember({
        where: params,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          role: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
