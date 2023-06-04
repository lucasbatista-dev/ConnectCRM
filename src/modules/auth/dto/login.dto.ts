import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDTO {
  @ApiProperty({
    default: "email@email.com"
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    default: "12345678"
  })
  @IsString()
  password: string;
}