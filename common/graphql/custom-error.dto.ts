import { Field, ObjectType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@ObjectType()
export class CustomErrorDto {
  @Field(() => String)
  message: string[] | string;

  @Field(() => Number)
  statusCode: number;

  @Field(() => String)
  @IsOptional()
  error?: string;
}
