import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FollowService {
  constructor(private prisma: PrismaService) {}

  async follow(followerId: number, followingId: number) {
    const follow = await this.prisma.follow.create({
      data: {
        followerId: followerId,
        followingId: followingId,
      },
    });
    return follow;
  }

  async unfollow(followerId: number, followingId: number) {
    const follow = await this.prisma.follow.deleteMany({
      where: {
        followerId: followerId,
        followingId: followingId,
      },
    });
    return follow;
  }
}
