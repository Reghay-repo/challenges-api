import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { LikesService } from '../likes/likes.service';
import { CommentsService } from '../comments/comments.service';
import { CommentDto } from '../comments/dto/comment.dto';

@UseGuards(JwtGuard)
@Controller('challenges')
export class ChallengeController {
  constructor(
    private readonly challengeService: ChallengeService,
    private likeService: LikesService,
    private commentService: CommentsService,
  ) {}

  @Post()
  async create(@GetUser('id') userId: number, @Body() dto: CreateChallengeDto) {
    return await this.challengeService.create(userId, dto);
  }

  @Get()
  async findAll() {
    return await this.challengeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.challengeService.findOne(id);
  }

  @Get('/foruser')
  async findforUser(@GetUser('id') userId: number) {
    return await this.challengeService.findForUser(userId);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateChallengeDto: UpdateChallengeDto,
  ) {
    return await this.challengeService.update(id, updateChallengeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.challengeService.remove(id);
  }

  // LIKE ROUTES
  @Post('like/:id')
  async like(@GetUser('id') userId: number, @Param('id') challengeId: number) {
    return await this.likeService.likeChallenge(userId, challengeId);
  }

  @Delete('unlike/:id')
  async unlike(
    @GetUser('id') userId: number,
    @Param('id') challengeId: number,
  ) {
    return await this.likeService.unlikeChallnge(userId, challengeId);
  }

  // Comment routes
  @Post('comment/:id')
  async comment(
    @GetUser('id') userId: number,
    @Param('id') challengeId: number,
    @Body() dto: CommentDto,
  ) {
    return await this.commentService.commentChallenge(userId, challengeId, dto);
  }

  @Delete('uncomment/:id')
  async deleteComment(
    @GetUser('id') userId: number,
    @Param('id') challengeId: number,
  ) {
    return await this.commentService.deleteChallengeComment(
      userId,
      challengeId,
    );
  }
}
