import { UserType, SexType } from '@prisma/client';
import { IsEmail, IsString } from 'class-validator';
// import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  type: UserType;

  @IsString()
  username: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  sex: SexType;

  @IsString()
  age: number;

  @IsString()
  phone: string;

  @IsString()
  country: string;

  @IsString()
  city: string;
}
