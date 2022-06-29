import { Module } from "@nestjs/common";
import { SequelizeConfigModule } from "config/sequelize-config/sequelize-config.module";
import { SequelizeConfigService } from "config/sequelize-config/sequelize-config.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    UsersModule,

    SequelizeModule.forRootAsync({
      imports: [SequelizeConfigModule],
      useExisting: SequelizeConfigService,
    }),
  ],
})
export class AuthApiModule {}
