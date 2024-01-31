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
import { GrindService } from './grind.service';

@Controller('/grinds')
export class GrindController {
  private readonly logger = new Logger(GrindController.name);

  constructor(private readonly grindService: GrindService) {}

  @Get()
  async findAll() {
    const grinds = await this.grindService.getGrinds();
    this.logger.debug(`found ${grinds.length} grinds `);
    return grinds;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const grind = await this.grindService.getGrind(id);

    if (!grind) {
      throw new NotFoundException();
    }

    return grind;
  }

  @Post()
  async create(@Body(ValidationPipe) input: GrindCreateDto) {
    const grind = await this.grindService.createGrind(input);

    if (!grind) {
      throw new NotFoundException();
    }

    return grind;
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id, @Body() input: GrindUpdateDto) {
    const result = await this.grindService.updateGrind(id, input);

    if (result.affected !== 1) {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: number) {
    const result = await this.grindService.deleteGrind(id);

    if (result.affected !== 1) {
      throw new NotFoundException();
    }
  }
}
