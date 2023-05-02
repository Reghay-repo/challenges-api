import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { FollowModule } from '../follow/follow.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [FollowModule],
})
export class UserModule {}
