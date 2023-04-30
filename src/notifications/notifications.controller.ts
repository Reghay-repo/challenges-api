import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { GetUser } from '../auth/decorator';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  createNotification(
    @Body() dto: CreateNotificationDto,
    @GetUser('id') userId: number,
  ) {
    return this.notificationsService.createNotification(dto, userId);
  }

  @Get()
  getAllNotifications(@GetUser('id') userId: number) {
    return this.notificationsService.getAllNotifications(userId);
  }

  @Patch(':id')
  markNotificationAsRead(@Param('id') notificationId: number) {
    return this.notificationsService.markNotificationAsRead(+notificationId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationsService.remove(+id);
  }
}
