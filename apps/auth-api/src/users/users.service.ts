import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Otp } from "common/entity/otp.model";
import { User } from "common/entity/user.model";
import { CustomErrorDto } from "common/graphql/custom-error.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}
  // ✅ Done
  public getAllUsers = async (): Promise<User[] | CustomErrorDto> => {
    try {
      const users = await this.userModel.findAll<User>({
        include: [Otp],
      });

      if (!users) {
        return { message: "No users found!", statusCode: 400 };
      }

      return users;
    } catch (error) {
      return error;
    }
  };
}
