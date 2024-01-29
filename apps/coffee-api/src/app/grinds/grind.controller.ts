import {
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  Param,
  Body,
  HttpCode,
  ParseIntPipe,
  ValidationPipe,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { GrindCreateDto } from './dto/grind-create.dto';
import { GrindUpdateDto } from './dto/grind-update.dto';
import { Grind } from './grind.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('/grinds')
export class GrindController {
  private readonly logger = new Logger(GrindController.name);

  constructor(
    @InjectRepository(Grind)
    private readonly repository: Repository<Grind>
  ) {}

  @Get()
  async findAll() {
    this.logger.log('find all was called.');
    const grinds = await this.repository.find();
    this.logger.debug(`found ${grinds.length} grinds `);
    return grinds;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id) {
    const grind = await this.repository.findOneBy({
      id: id,
    });

    if (!grind) {
      throw new NotFoundException();
    }

    return grind;
  }

  @Post()
  async create(@Body(ValidationPipe) input: GrindCreateDto) {
    const grind = await this.repository.save({
      ...input,
    });

    if (!grind) {
      throw new NotFoundException();
    }

    return grind;
  }

  @Patch(':id')
  async update(@Param('id') id, @Body() input: GrindUpdateDto) {
    const grind = await this.repository.findOne(id);

    if (!grind) {
      throw new NotFoundException();
    }

    return await this.repository.save({
      ...grind,
      ...input,
    });
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id) {
    const grind = await this.repository.findOne(id);

    if (!grind) {
      throw new NotFoundException();
    }

    await this.repository.remove(grind);
  }
}
