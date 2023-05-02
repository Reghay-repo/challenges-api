import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CommentDto } from './dto/comment.dto';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}
  async commentPost(userId: number, postId: number, dto: CommentDto) {
    const comment = await this.prisma.postComment.create({
      data: {
        content: dto.content,
        userId: userId,
        postId: postId,
      },
    });

    return comment;
  }

  async deletePostComment(userId: number, postId: number) {
    const comment = await this.prisma.postComment.deleteMany({
      where: {
        userId: userId,
        postId: postId,
      },
    });

    return comment;
  }

  async commentChallenge(userId: number, challengeId: number, dto: CommentDto) {
    const comment = await this.prisma.challengeComment.create({
      data: {
        content: dto.content,
        userId: userId,
        challengeId: challengeId,
      },
    });

    return comment;
  }

  async deleteChallengeComment(userId: number, challengeId: number) {
    const comment = await this.prisma.challengeLike.deleteMany({
      where: {
        userId: userId,
        challengeId: challengeId,
      },
    });

    return comment;
  }
}
