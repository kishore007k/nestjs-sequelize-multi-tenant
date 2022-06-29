import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "common/entity/user.model";
import { Otp } from "common/entity/otp.model";
import { Social } from "common/entity/social.model";

@Module({
  imports: [SequelizeModule.forFeature([User, Otp, Social])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
