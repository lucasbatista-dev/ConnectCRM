import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  createdAt: Date;

  updatedAt: Date;

  deletedAt?: Date;

  @IsString()
  @IsNotEmpty()
  user_id?: string;
}
