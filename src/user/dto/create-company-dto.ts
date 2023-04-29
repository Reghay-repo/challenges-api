import { UserType } from '@prisma/client';
import { IsEmail, IsString } from 'class-validator';
// import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyDto {
  @IsEmail()
  email: string;

  @IsString()
  type: UserType;

  @IsString()
  password: string;

  @IsString()
  username: string;

  @IsString()
  phone: string;

  @IsString()
  address: string;

  @IsString()
  field: string;

  @IsString()
  ice: string;
}
