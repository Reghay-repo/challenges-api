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

@UseGuards(JwtGuard)
@Controller('challenges')
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  @Post()
  async create(@GetUser('id') userId: number, @Body() dto: CreateChallengeDto) {
    return await this.challengeService.create(userId, dto);
  }

  @Get()
  async findAll() {
    return await this.challengeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.challengeService.findOne(+id);
  }

  @Get('/foruser')
  async findforUser(@GetUser('id') userId: number) {
    return await this.challengeService.findForUser(userId);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateChallengeDto: UpdateChallengeDto,
  ) {
    return await this.challengeService.update(+id, updateChallengeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.challengeService.remove(+id);
  }
}
