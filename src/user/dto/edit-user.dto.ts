import { IsEmail, IsOptional, IsString } from 'class-validator';
// import { ApiProperty } from '@nestjs/swagger';
export class EditUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsString()
  @IsOptional()
  username: string;

  @IsString()
  @IsOptional()
  firstname: string;

  @IsString()
  @IsOptional()
  lastname: string;

  @IsString()
  @IsOptional()
  phone: string;

  @IsString()
  @IsString()
  @IsOptional()
  country: string;

  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  field: string;

  @IsString()
  @IsOptional()
  ice: string;
}
