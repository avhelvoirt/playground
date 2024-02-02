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
import { BrewingController } from '../brewing/brewingController';
import { BrewingCreateDto } from '../brewing/dto/brewing-create.dto';
import { BrewingCategoryService } from './brewing-category.service';
import { BrewingCategoryUpdateDto } from './dto/brewing-category-update.dto';

@Controller('/brewingCategories')
export class BrewingCategoryController {
  private readonly logger = new Logger(BrewingController.name);

  constructor(
    private readonly brewingCategoryService: BrewingCategoryService
  ) {}

  @Get()
  async findAll() {
    const brewingCategories =
      await this.brewingCategoryService.getBrewingCategories();
    this.logger.debug(`found ${brewingCategories.length}`);
    return brewingCategories;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const brewingCategory =
      await this.brewingCategoryService.getBrewingCategory(id);

    if (!brewingCategory) {
      throw new NotFoundException();
    }

    return brewingCategory;
  }

  @Post()
  async create(@Body(ValidationPipe) input: BrewingCreateDto) {
    const brewingCategory =
      await this.brewingCategoryService.createBrewingCategory(input);

    if (!brewingCategory) {
      throw new NotFoundException();
    }

    return brewingCategory;
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() input: BrewingCategoryUpdateDto
  ) {
    const result = await this.brewingCategoryService.updateBrewingCategory(
      id,
      input
    );

    if (result.affected !== 1) {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: number) {
    const brewingCategory =
      await this.brewingCategoryService.deleteBrewingCategory(id);

    if (!brewingCategory) {
      throw new NotFoundException();
    }
  }

  @Get('brewings/:id')
  async getBrewingsWhereCategoryIdIs(@Param('id') id: number) {
    const result =
      await this.brewingCategoryService.getBrewingsWhereCategoryIdIs(id);
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  @Post('brewings/:id')
  async addBrewingToBrewingCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) input: number
  ) {
    const brewing = this.brewingCategoryService.addBrewingToBrewingCategory(
      id,
      input
    );
    if (!brewing) {
      throw new NotFoundException();
    }
    return brewing;
  }

  @Delete('brewings/:id')
  @HttpCode(204)
  async removeBrewingFromBrewingCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) input: number
  ) {
    const removeBrewing =
      this.brewingCategoryService.removeBrewingFromBrewingCategory(id, input);
    if (!removeBrewing) {
      throw new NotFoundException();
    }
  }
}
