import { Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { LikesService } from './likes.service';
import { GetUser } from '../auth/decorator';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post('posts/:postId/users/:userId')
  async likePost(
    @Param('postId') postId: number,
    @GetUser('id') userId: number,
  ): Promise<void> {
    await this.likesService.likePost(postId, userId);
  }

  @Post('challenges/:challengeId/users/:userId')
  async likeChallenge(
    @Param('challengeId') challengeId: number,
    @GetUser('id') userId: number,
  ): Promise<void> {
    await this.likesService.likeChallenge(challengeId, userId);
  }

  @Delete(':likeId')
  async removeLike(@Param('likeId') likeId: number): Promise<void> {
    await this.likesService.removeLike(likeId);
  }
}
