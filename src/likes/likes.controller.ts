import { Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { LikesService } from './likes.service';
import { GetUser } from '../auth/decorator';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}
}
