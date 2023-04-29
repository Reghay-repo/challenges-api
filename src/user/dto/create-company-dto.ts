import { UserType } from '@prisma/client';
import {IsEmail, IsNotEmpty, IsString} from 'class-validator';
// import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  type: UserType;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  field: string;

  @IsString()
  @IsNotEmpty()
  ice: string;
}
