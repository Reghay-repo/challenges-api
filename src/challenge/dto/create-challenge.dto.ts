import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateChallengeDto {
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsNotEmpty()
  videoUrl: string;
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  endDate: Date;
}
