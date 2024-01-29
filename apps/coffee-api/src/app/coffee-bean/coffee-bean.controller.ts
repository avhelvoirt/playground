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
import { CoffeeBean } from './coffee-bean.entity';
import { Repository } from 'typeorm';
import { CoffeeBeanCreateDto } from './dto/coffee-bean-create.dto';
import { CoffeeBeanUpdateDto } from './dto/coffee-bean-update.dto';

@Controller('/coffeeBean')
export class CoffeeBeanController {
  private readonly logger = new Logger(CoffeeBeanController.name);

  constructor(
    @InjectRepository(CoffeeBean)
    private readonly repository: Repository<CoffeeBean>
  ) {}

  @Get()
  async findAll() {
    this.logger.log('find all was called.');
    const coffeeBeans = await this.repository.find();
    this.logger.debug(`found ${coffeeBeans.length} coffee beans`);
    return coffeeBeans;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id) {
    const coffeeBean = await this.repository.findOneBy({
      id: id,
    });

    if (!coffeeBean) {
      throw new NotFoundException();
    }

    return coffeeBean;
  }

  @Post()
  async create(@Body(ValidationPipe) input: CoffeeBeanCreateDto) {
    const coffeeBean = await this.repository.save({
      ...input,
    });

    if (!coffeeBean) {
      throw new NotFoundException();
    }

    return coffeeBean;
  }

  @Patch(':id')
  async update(@Param('id') id, @Body() input: CoffeeBeanUpdateDto) {
    const coffeeBean = await this.repository.findOne(id);

    if (!coffeeBean) {
      throw new NotFoundException();
    }

    return await this.repository.save({
      ...coffeeBean,
      ...input,
    });
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id) {
    const coffeeBean = await this.repository.findOne(id);

    if (!coffeeBean) {
      throw new NotFoundException();
    }

    await this.repository.remove(coffeeBean);
  }
}
