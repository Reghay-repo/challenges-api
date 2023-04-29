import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsOptional()
  description: string;
  @IsArray()
  imageUrls: [];

  @IsArray()
  tags: [];
}
