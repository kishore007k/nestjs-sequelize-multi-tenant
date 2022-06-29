import { Inject, Injectable, Scope } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { RequestContext } from "@nestjs/microservices";
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from "@nestjs/sequelize";
import { createDb, isExist } from "config/database-options";

@Injectable({ scope: Scope.REQUEST })
export class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor(@Inject(REQUEST) private readonly request: RequestContext) {}

  async createSequelizeOptions(): Promise<SequelizeModuleOptions> {
    let database = "dev";
    let tenantId: any = "";

    const data = this.request.data;

    if (data.tenantId !== undefined) {
      tenantId = data.tenantId;
      database = tenantId;
    }

    // Check if database exists
    const isDbExist = await isExist(database);
    console.log("isDbExist", isDbExist);

    if (!isDbExist) {
      // Create database
      const dbCreated = await createDb(database);
      console.log("dbCreated", dbCreated);
    }

    console.log("current DB from middleware", database);

    return {
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "123456789",
      database: database,
      autoLoadModels: true,
      synchronize: true,
    };
  }
}
