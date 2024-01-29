import {
  Body,
  Controller,
  Get,
  Logger,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brewing } from './brewing.entity';
import { Repository } from 'typeorm';
import { BrewingCreateDto } from './dto/brewing-create.dto';

@Controller('/brewing')
export class BrewingController {
  private readonly logger = new Logger(BrewingController.name);

  constructor(
    @InjectRepository(Brewing)
    private readonly repository: Repository<Brewing>
  ) {}

  @Get()
  async findAll() {
    this.logger.log('find all was called.');
    const brewings = await this.repository.find();
    this.logger.debug(`found ${brewings.length} brewings`);
    return brewings;
  }

  @Get()
  async findOne(@Param('id', ParseIntPipe) id) {
    const brewing = await this.repository.findOneBy({
      id: id,
    });

    if (!brewing) {
      throw new NotFoundException();
    }

    return brewing;
  }

  @Post()
  async create(@Body(ValidationPipe) input: BrewingCreateDto) {
    console.log(input);
    const brewing = await this.repository.save({
      ...input,
    });

    if (!brewing) {
      throw new NotFoundException();
    }

    return brewing;
  }
}
