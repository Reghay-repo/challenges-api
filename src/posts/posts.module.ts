import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { LikesModule } from '../likes/likes.module';
import { CommentsModule } from '../comments/comments.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [LikesModule, CommentsModule],
})
export class PostsModule {}
