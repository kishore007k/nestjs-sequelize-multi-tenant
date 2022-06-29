import { Field, ID, ObjectType } from "@nestjs/graphql";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

@ObjectType()
export class OtpGqlDto {
  @Field(() => ID)
  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @Field(() => String, { nullable: false })
  @IsString()
  @IsNotEmpty()
  readonly otp: string;

  @Field(() => Date, { nullable: false })
  @IsDate()
  @IsNotEmpty()
  readonly expiresAt: Date;

  @Field(() => String, { nullable: false })
  @IsString()
  @IsNotEmpty()
  readonly userId: string;
}
