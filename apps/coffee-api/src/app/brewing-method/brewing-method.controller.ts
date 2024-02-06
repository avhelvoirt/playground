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
import { BrewingMethodCreateDto } from './dto/brewing-method-create.dto';
import { BrewingMethodService } from './brewing-method.service';

@Controller('/brewingMethods')
export class BrewingMethodController {
  private readonly logger = new Logger(BrewingMethodController.name);

  constructor(private readonly brewingMethodService: BrewingMethodService) {}

  @Get()
  async findAll() {
    const brewingMethods = await this.brewingMethodService.getBrewingMethods();
    this.logger.debug(`found ${brewingMethods.length} brewing methods`);
    return brewingMethods;
  }

  @Get(':name')
  async findOne(@Param('name') name: string) {
    const brewingMethod = await this.brewingMethodService.getBrewingMethod(
      name
    );

    if (!brewingMethod) {
      throw new NotFoundException();
    }

    return brewingMethod;
  }

  @Post()
  async create(@Body(ValidationPipe) input: BrewingMethodCreateDto) {
    const brewingMethod = await this.brewingMethodService.createBrewingMethod(
      input
    );

    if (!brewingMethod) {
      throw new NotFoundException();
    }

    return brewingMethod;
  }
}
