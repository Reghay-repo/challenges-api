import { IsNumber, IsOptional } from 'class-validator';

export class CreateLikeDto {
  @IsNumber()
  @IsOptional()
  userId: number;

  @IsNumber()
  @IsOptional()
  postId: number;

  @IsNumber()
  @IsOptional()
  challengeId: number;
}
