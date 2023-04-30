import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LikesService {
  constructor(private prisma: PrismaService) {}
  async likePost(postId: number, userId: number): Promise<void> {
    await this.prisma.like.create({
      data: {
        userId,
        postId,
      },
    });
  }

  async likeChallenge(challengeId: number, userId: number): Promise<void> {
    await this.prisma.like.create({
      data: {
        userId,
        challengeId,
      },
    });
  }

  async removeLike(likeId: number): Promise<void> {
    await this.prisma.like.delete({
      where: {
        id: likeId,
      },
    });
  }
}
