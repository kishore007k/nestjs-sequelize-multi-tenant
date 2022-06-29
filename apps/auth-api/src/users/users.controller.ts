import { Body, Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // Get all users
  @MessagePattern({ cmd: "get_all_users" })
  getAllUsers() {
    console.log("get_all_users");
    return this.usersService.getAllUsers();
  }
}
