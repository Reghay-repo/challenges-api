import { Controller, Get, UseGuards } from '@nestjs/common';
import { PresignedUrlsService } from './presigned-urls.service';
import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('presignedurls')
export class PresignedUrlsController {
  constructor(private readonly presignedUrlsService: PresignedUrlsService) {}

  @Get('/challenge')
  async uploadChallengeUrl(@GetUser() user: User) {
    const presignedUrl =
      await this.presignedUrlsService.generateChallengePresignedUrl(user);
    return {
      presignedUrl,
    };
  }

  @Get('/post')
  async uploadPostUrl(@GetUser() user: User) {
    const presignedUrl =
      await this.presignedUrlsService.generatePostPresignedUrl(user);
    return {
      presignedUrl,
    };
  }
}
