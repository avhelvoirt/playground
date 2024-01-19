import {
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';
import { GrindCreateDto } from './dto/grind-create.dto';
import { GrindUpdateDto } from './dto/grind-update.dto';
import { Grind } from './grind.entity';

@Controller('/grinds')
export class GrindController {
  private grinds: Grind[] = [];

  @Get()
  getAll() {
    return this.grinds;
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.grinds.find((grind) => grind.id === parseInt(id));
  }

  @Post()
  create(@Body() input: GrindCreateDto) {
    const grind = {
      ...input,
      id: this.grinds.length + 1,
    };
    this.grinds.push(grind);
    return grind;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() input: GrindUpdateDto) {
    const index = this.grinds.findIndex((grind) => grind.id === parseInt(id));

    this.grinds[index] = {
      ...this.grinds[index],
      ...input,
    };

    return this.grinds[index];
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    this.grinds = this.grinds.filter((grind) => grind.id !== parseInt(id));
  }
}
