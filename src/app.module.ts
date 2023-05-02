import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ChallengeModule } from './challenge/challenge.module';
import { PostsModule } from './posts/posts.module';
import { LikesModule } from './likes/likes.module';
import { PresignedUrlsModule } from './presigned-urls/presigned-urls.module';
import { CommentsModule } from './comments/comments.module';
import { FollowModule } from './follow/follow.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    PrismaModule,
    PostsModule,
    ChallengeModule,
    LikesModule,
    PresignedUrlsModule,
    LikesModule,
    CommentsModule,
    FollowModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
