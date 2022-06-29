import { Query, Resolver } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { UserGqlDto } from "common/graphql/user-gql.dto";

@Resolver(() => UserGqlDto)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [UserGqlDto])
  async getAllUsers(): Promise<UserGqlDto[]> {
    return this.usersService.getAllUsers();
  }
}
