import { ApiProperty } from "@nestjs/swagger";
import { hashSync } from "bcryptjs"
import { Transform } from "class-transformer"
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    default: "email@email.com"
  })
  @IsEmail()
  @IsNotEmpty()
  email: string

  @ApiProperty({
    default: "12345678"
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform']
  })
  password: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  avatar: string

  createdAt: Date;

  updatedAt: Date;

  deletedAt?: Date;

}
