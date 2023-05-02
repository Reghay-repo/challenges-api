import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { GetUser } from '../auth/decorator';
import { LikesService } from '../likes/likes.service';
import { CommentsService } from '../comments/comments.service';
import { CommentDto } from '../comments/dto/comment.dto';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private likeService: LikesService,
    private commentService: CommentsService,
  ) {}

  @Post()
  create(@Body() dto: CreatePostDto, @GetUser() userId: number) {
    return this.postsService.create(dto, userId);
  }

  @Get()
  findAll(@GetUser('id') userId: number) {
    return this.postsService.findAll(userId);
  }

  @Get(':id')
  findOne(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) postId: number,
  ) {
    return this.postsService.findOne(userId, postId);
  }

  @Patch(':id')
  update(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) postId: number,
    @Body() dto: UpdatePostDto,
  ) {
    return this.postsService.update(+userId, +postId, dto);
  }

  @Delete(':id')
  remove(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) postId: number,
  ) {
    return this.postsService.remove(+userId, +postId);
  }

  // LIKE ROUTES
  @Post('like/:id')
  async like(@GetUser('id') userId: number, @Param('id') postId: number) {
    return await this.likeService.likePost(userId, postId);
  }

  @Delete('unlike/:id')
  async unlike(@GetUser('id') userId: number, @Param('id') postId: number) {
    return await this.likeService.unlikePost(userId, postId);
  }

  // Comment routes
  @Post('comment/:id')
  async comment(
    @GetUser('id') userId: number,
    @Param('id') postId: number,
    @Body() dto: CommentDto,
  ) {
    return await this.commentService.commentPost(userId, postId, dto);
  }

  @Delete('uncomment/:id')
  async deleteComment(
    @GetUser('id') userId: number,
    @Param('id') postId: number,
  ) {
    return await this.commentService.deletePostComment(userId, postId);
  }
}
