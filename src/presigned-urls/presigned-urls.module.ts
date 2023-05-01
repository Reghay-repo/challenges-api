import { Module } from '@nestjs/common';
import { PresignedUrlsService } from './presigned-urls.service';
import { PresignedUrlsController } from './presigned-urls.controller';

@Module({
  controllers: [PresignedUrlsController],
  providers: [PresignedUrlsService]
})
export class PresignedUrlsModule {}
