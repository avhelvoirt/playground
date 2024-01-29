import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Logger,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrewingCattegory } from './brewing-category.entity';
import { Repository } from 'typeorm';
import { brewingController } from '../brewing/brewing.controller';
import { BrewingCreateDto } from '../brewing/dto/brewing-create.dto';
import { GrindUpdateDto } from '../grind/dto/grind-update.dto';

@Controller('/brewing-category')
export class BrewingCategoryController {
  private readonly logger = new Logger(brewingController.name);

  constructor(
    @InjectRepository(BrewingCattegory)
    private readonly repository: Repository<BrewingCattegory>
  ) {}

  @Get()
  async findAll() {
    this.logger.log('find all was called.');
    const brewingCategorys = await this.repository.find();
    this.logger.debug(`found ${brewingCategorys.length}`);
    return brewingCategorys;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id) {
    const brewingCategory = await this.repository.findOneBy({
      id: id,
    });

    if (!brewingCategory) {
      throw new NotFoundException();
    }

    return brewingCategory;
  }

  @Post()
  async create(@Body(ValidationPipe) input: BrewingCreateDto) {
    const brewingCategory = await this.repository.save({
      ...input,
    });

    if (!brewingCategory) {
      throw new NotFoundException();
    }

    return brewingCategory;
  }

  @Patch(':id')
  async update(@Param('id') id, @Body() input: GrindUpdateDto) {
    const brewingCategory = await this.repository.findOne(id);

    if (!brewingCategory) {
      throw new NotFoundException();
    }

    return await this.repository.save({
      ...brewingCategory,
      ...input,
    });
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id) {
    const brewingCategory = await this.repository.findOne(id);

    if (!brewingCategory) {
      throw new NotFoundException();
    }

    await this.repository.remove(brewingCategory);
  }
}
