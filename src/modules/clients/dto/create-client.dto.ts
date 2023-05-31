import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateClientDto {

  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  createdAt: Date;

  updatedAt: Date;

  deletedAt?: Date;
}
