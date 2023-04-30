import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePostDto, userId: number) {
    const post = await this.prisma.post.create({
      data: {
        userId,

        ...dto,
      },
    });

    return post;
  }

  async findAll(userId: number) {
    const posts = await this.prisma.post.findMany({
      where: {
        id: userId,
      },
    });
    return {
      success: true,
      data: posts,
    };
  }

  async findOne(postId: number, userId: number) {
    const post = await this.prisma.post.findFirst({
      where: {
        id: postId,
      },
    });

    // check if user own the post
    if (!post || post.userId !== userId) {
      throw new ForbiddenException('Access to resource is denied.');
    }

    return post;
  }

  async update(userId: number, postId: number, dto: UpdatePostDto) {
    // get the post by id
    const post = await this.prisma.post.findFirst({
      where: {
        id: postId,
      },
    });

    // check if user owns the post
    if (!post || post.userId !== userId)
      throw new ForbiddenException('Access to resources denied');

    return this.prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        ...dto,
      },
    });
  }

  async remove(userId: number, postId: number) {
    const post = await this.prisma.post.findFirst({
      where: {
        id: postId,
      },
    });

    // check if user owns the post
    if (!post || post.userId !== userId)
      throw new ForbiddenException('Access to resources denied');

    await this.prisma.post.delete({
      where: {
        id: postId,
      },
    });
  }
}
