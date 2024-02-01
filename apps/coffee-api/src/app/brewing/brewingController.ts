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
import { BrewingCreateDto } from './dto/brewing-create.dto';
import { BrewingService } from './brewing.service';
import { BrewingUpdateDto } from './dto/brewing-update.dto';

@Controller('/brewings')
export class BrewingController {
  private readonly logger = new Logger(BrewingController.name);

  constructor(private readonly brewingService: BrewingService) {}

  @Get()
  async findAll() {
    const brewings = await this.brewingService.getBrewings();
    this.logger.debug(`found ${brewings.length} brewings`);
    return brewings;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const brewing = await this.brewingService.getBrewing(id);

    if (!brewing) {
      throw new NotFoundException();
    }

    return brewing;
  }

  @Post()
  async create(@Body(ValidationPipe) input: BrewingCreateDto) {
    const brewing = await this.brewingService.createBrewing(input);

    if (!brewing) {
      throw new NotFoundException();
    }

    return brewing;
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() input: BrewingUpdateDto
  ) {
    const result = await this.brewingService.updateBrewing(id, input);

    if (result.affected !== 1) {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: number) {
    const result = await this.brewingService.deleteBrewing(id);

    if (result.affected !== 1) {
      throw new NotFoundException();
    }
  }
}
