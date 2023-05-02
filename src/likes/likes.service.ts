import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LikesService {
  constructor(private prisma: PrismaService) {}

  async likePost(userId: number, postId: number) {
    const like = await this.prisma.postLike.create({
      data: {
        userId: userId,
        postId: postId,
      },
    });

    return like;
  }

  async unlikePost(userId: number, postId: number) {
    const like = await this.prisma.postLike.deleteMany({
      where: {
        userId: userId,
        postId: postId,
      },
    });

    return like;
  }

  async likeChallenge(userId: number, challengeId: number) {
    const like = await this.prisma.challengeLike.create({
      data: {
        userId: userId,
        challengeId: challengeId,
      },
    });

    return like;
  }

  async unlikeChallnge(userId: number, challengeId: number) {
    const like = await this.prisma.challengeLike.deleteMany({
      where: {
        userId: userId,
        challengeId: challengeId,
      },
    });

    return like;
  }
}
