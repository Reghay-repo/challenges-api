import { Module } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { ChallengeController } from './challenge.controller';
import { LikesModule } from '../likes/likes.module';
import { CommentsModule } from '../comments/comments.module';

@Module({
  controllers: [ChallengeController],
  providers: [ChallengeService],
  imports: [LikesModule, CommentsModule],
})
export class ChallengeModule {}
