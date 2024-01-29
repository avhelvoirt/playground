import {
  Body,
  Controller,
  Get,
  Logger,
  NotFoundException,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrewingMethode } from './brewing-methode.entity';
import { Repository } from 'typeorm';
import { BrewingMethodeCreateDto } from './dto/brewing-methode-create.dto';

@Controller('/brewingMethode')
export class BrewingMethodeController {
  private readonly logger = new Logger(BrewingMethodeController.name);

  constructor(
    @InjectRepository(BrewingMethode)
    private readonly repository: Repository<BrewingMethode>
  ) {}

  @Get()
  async findAll() {
    this.logger.log('find all was called.');
    const brewingMethode = await this.repository.find();
    this.logger.debug(`found ${brewingMethode.length} brewing methodes`);
    return brewingMethode;
  }

  @Get(':name')
  async findOne(@Param('name') name) {
    const brewingMethode = await this.repository.findOneBy({
      name: name,
    });

    if (!brewingMethode) {
      throw new NotFoundException();
    }

    return brewingMethode;
  }

  @Post()
  async create(@Body(ValidationPipe) input: BrewingMethodeCreateDto) {
    const brewingMethode = await this.repository.save({
      ...input,
    });

    if (!brewingMethode) {
      throw new NotFoundException();
    }

    return brewingMethode;
  }
}
