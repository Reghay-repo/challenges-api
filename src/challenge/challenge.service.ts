import { Injectable } from '@nestjs/common';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ChallengeService {
  constructor(private prisma: PrismaService) {}
  async create(userId: number, dto: CreateChallengeDto) {
    const challenge = await this.prisma.challenge.create({
      data: {
        ...dto,
        userId: userId,
      },
    });
    return challenge;
  }

  async findAll() {
    return await this.prisma.challenge.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.challenge.findUnique({
      where: {
        id: id,
      },
    });
  }

  async findForUser(userId: number) {
    return await this.prisma.challenge.findMany();
  }

  async update(id: number, dto: UpdateChallengeDto) {
    return await this.prisma.challenge.update({
      data: {
        ...dto,
      },
      where: {
        id: id,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.challenge.delete({
      where: {
        id: id,
      },
    });
  }
}
