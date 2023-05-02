import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
import { FollowService } from '../follow/follow.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
    private followService: FollowService,
  ) {}

  @Get('me')
  me(@GetUser() user: User) {
    return {
      success: true,
      data: user,
    };
  }

  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }

  // FOLLOW ROUTES
  @Post('follow/:id')
  async follow(
    @GetUser('id') userId: number,
    @Param('id') followingId: number,
  ) {
    const follow = await this.followService.follow(userId, followingId);
    return follow;
  }

  @Delete('unfollow/:id')
  async unfollow(
    @GetUser('id') userId: number,
    @Param('id') followingId: number,
  ) {
    const follow = await this.followService.unfollow(userId, followingId);
    return follow;
  }
}
