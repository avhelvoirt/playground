import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoffeeBean } from './coffee-bean.entity';
import { Repository } from 'typeorm';
import { CoffeeBeanUpdateDto } from './dto/coffee-bean-update.dto';
import { CoffeeBeanCreateDto } from './dto/coffee-bean-create.dto';

@Injectable()
export class CoffeeBeanService {
  private logger = new Logger(CoffeeBeanService.name);
  constructor(
    @InjectRepository(CoffeeBean)
    private readonly coffeeBeanRepository: Repository<CoffeeBean>
  ) {}

  private getCoffeeBeanBaseRepository() {
    return this.coffeeBeanRepository
      .createQueryBuilder('cb')
      .orderBy('cb.id', 'DESC');
  }

  public async getCoffeeBeans(): Promise<CoffeeBean[]> {
    return await this.coffeeBeanRepository.find();
  }

  public async getCoffeeBean(id: number): Promise<CoffeeBean | undefined> {
    const query = this.getCoffeeBeanBaseRepository().andWhere('cb.id = :id', {
      id,
    });
    this.logger.debug(query.getSql());

    return await query.getOne();
  }

  public async createCoffeeBean(input: CoffeeBeanCreateDto) {
    return await this.coffeeBeanRepository.save({
      ...input,
    });
  }

  public async updateCoffeeBean(id: number, input: CoffeeBeanUpdateDto) {
    return await this.coffeeBeanRepository
      .createQueryBuilder('cb')
      .update(CoffeeBean)
      .set({ ...input })
      .where('id = :id', { id })
      .execute();
  }

  public async deleteCoffeeeBean(id: number) {
    return await this.coffeeBeanRepository
      .createQueryBuilder('cb')
      .delete()
      .where('id = :id', { id })
      .execute();
  }
}
