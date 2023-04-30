import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}
  async createNotification(dto: CreateNotificationDto, userId: number) {
    const { message } = dto;
    try {
      return await this.prisma.notification.create({
        data: {
          userId,
          message,
        },
      });
    } catch (error) {
      throw new Error('Failed to create notification');
    }
  }
  async getAllNotifications(userId: number) {
    try {
      return await this.prisma.notification.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      throw new Error('Failed to fetch notifications');
    }
  }

  async markNotificationAsRead(notificationId: number) {
    try {
      await this.prisma.notification.update({
        where: { id: notificationId },
        data: { read: true },
      });
    } catch (error) {
      throw new Error('Failed to mark notification as read');
    }
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
