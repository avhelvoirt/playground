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
import { BrewingMethodeCreateDto } from './dto/brewing-methode-create.dto';
import { BrewingMethodeService } from './brewing-methode.service';

@Controller('/brewingMethods')
export class BrewingMethodeController {
  private readonly logger = new Logger(BrewingMethodeController.name);

  constructor(private readonly brewingMethodeService: BrewingMethodeService) {}

  @Get()
  async findAll() {
    const brewingMethods = await this.brewingMethodeService.getBrewingMethods();
    this.logger.debug(`found ${brewingMethods.length} brewing methodes`);
    return brewingMethods;
  }

  @Get(':name')
  async findOne(@Param('name') name: string) {
    const brewingMethode = await this.brewingMethodeService.getBrewingMethode(
      name
    );

    if (!brewingMethode) {
      throw new NotFoundException();
    }

    return brewingMethode;
  }

  @Post()
  async create(@Body(ValidationPipe) input: BrewingMethodeCreateDto) {
    const brewingMethode =
      await this.brewingMethodeService.createBrewingMethode(input);

    if (!brewingMethode) {
      throw new NotFoundException();
    }

    return brewingMethode;
  }
}
