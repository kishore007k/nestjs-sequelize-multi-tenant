import {
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { Otp } from "./otp.model";
import { Social } from "./social.model";

@Table
export class User extends Model {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  mobile: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  dob: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  alias: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  avatar: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isActive: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isAdmin: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isLoggedIn: boolean;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: true,
    defaultValue: [
      "df629c31-6fe4-4a1b-9b3b-e59336de17a9",
      "df629c31-6fe4-4a1b-9b3b-e59336de17g3",
      "df629c31-6fe4-4a1b-9b3b-e59336de17x3",
    ],
  })
  preferredTags: string[];

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: true,
    defaultValue: [
      "df629c31-6fe4-4a1b-9b3b-e59336de17ty",
      "df629c31-6fe4-4a1b-9b3b-e59336de17h1",
      "df629c31-6fe4-4a1b-9b3b-e59336de17g2",
    ],
  })
  favoritePackets: string[];

  @HasMany(() => Otp, "userId")
  otps: Otp[];

  @HasOne(() => Social)
  social: Social;
}
