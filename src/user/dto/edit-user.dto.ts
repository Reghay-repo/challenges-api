import { IsEmail, IsOptional, IsString } from 'class-validator';
// import { ApiProperty } from '@nestjs/swagger';
// import { Company, Normal, UserType } from '@prisma/client';

export class UserUpdateDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  username?: string;

  type: UserType;

  @IsOptional()
  company?: Company;

  @IsOptional()
  normal?: Normal;
}
