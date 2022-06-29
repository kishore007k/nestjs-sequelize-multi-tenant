import { Inject, Injectable, Scope } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CONTEXT } from "@nestjs/graphql";
import { RequestFunction } from "common/RequestFunction";
import { UserGqlDto } from "common/graphql/user-gql.dto";

@Injectable({ scope: Scope.REQUEST })
export class UsersService {
  private readonly tenantId: any;
  constructor(
    @Inject("USERS_SERVICE") private readonly usersServiceClient: ClientProxy,
    @Inject(CONTEXT) private readonly context: any,
  ) {
    if (this.context.req.headers["x-tenant-id"] !== undefined) {
      this.tenantId = this.context.req.headers["x-tenant-id"]
        ? `tenant_${this.context.req.headers["x-tenant-id"]}`
        : "dev";
    }
  }

  getAllUsers = async (): Promise<UserGqlDto[]> => {
    const res: any = await new RequestFunction(
      this.usersServiceClient,
      "get_all_users",
      { tenantId: this.tenantId },
    ).request();
    return res;
  };
}
