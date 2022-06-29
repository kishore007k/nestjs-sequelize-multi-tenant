import { Field, ID, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

@ObjectType()
export class SocialIdsGqlDto {
  @Field(() => ID)
  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly google?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly facebook?: string;

  @Field(() => String, { nullable: false })
  @IsString()
  @IsNotEmpty()
  readonly userId: string;
}
