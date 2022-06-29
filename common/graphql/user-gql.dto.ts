import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Matches,
} from "class-validator";
import { OtpGqlDto } from "./otp-gql.dto";
import { SocialIdsGqlDto } from "./socialIds.dto";

@ObjectType()
export class UserGqlDto {
  @Field(() => ID, { nullable: true })
  @IsString()
  @IsOptional()
  readonly id?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly alias?: string;

  @Field(() => String, { nullable: true })
  @IsEmail()
  @IsOptional()
  readonly email?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @Matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
  readonly mobile?: string;

  @Field(() => String, { nullable: true })
  @IsDateString()
  @IsOptional()
  readonly dob?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly firstName?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly lastName?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly avatar?: string;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  readonly isActive: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  readonly isLoggedIn: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  readonly isAdmin: boolean;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly favoritePackets?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly preferredTags?: string[];

  @Field(() => [OtpGqlDto], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly otps?: OtpGqlDto[];

  @Field(() => SocialIdsGqlDto, { nullable: true })
  @IsObject()
  @IsOptional()
  readonly social?: SocialIdsGqlDto;
}
