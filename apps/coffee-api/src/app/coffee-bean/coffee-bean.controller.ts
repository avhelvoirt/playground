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
import { CoffeeBeanCreateDto } from './dto/coffee-bean-create.dto';
import { CoffeeBeanUpdateDto } from './dto/coffee-bean-update.dto';
import { CoffeeBeanService } from './coffee-bean.service';

@Controller('/coffeeBeans')
export class CoffeeBeanController {
  private readonly logger = new Logger(CoffeeBeanController.name);

  constructor(private readonly coffeeBeanService: CoffeeBeanService) {}

  @Get()
  async findAll() {
    const coffeeBeans = await this.coffeeBeanService.getCoffeeBeans();
    this.logger.debug(`found ${coffeeBeans.length} coffee beans`);
    return coffeeBeans;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const coffeeBean = await this.coffeeBeanService.getCoffeeBean(id);

    if (!coffeeBean) {
      throw new NotFoundException();
    }

    return coffeeBean;
  }

  @Post()
  async create(@Body(ValidationPipe) input: CoffeeBeanCreateDto) {
    const coffeeBean = await this.coffeeBeanService.createCoffeeBean(input);

    if (!coffeeBean) {
      throw new NotFoundException();
    }

    return coffeeBean;
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() input: CoffeeBeanUpdateDto) {
    const result = await this.coffeeBeanService.updateCoffeeBean(id, input);

    if (result.affected !== 1) {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: number) {
    const result = await this.coffeeBeanService.deleteCoffeeeBean(id);

    if (result.affected !== 1) {
      throw new NotFoundException();
    }
  }
}
