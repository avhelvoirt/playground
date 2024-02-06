import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrewingMethod } from './brewing-method.entity';
import { Repository } from 'typeorm';
import { BrewingMethodUpdateDto } from './dto/brewing-method-update.dto';

@Injectable()
export class BrewingMethodService {
  private logger = new Logger(BrewingMethodService.name);
  constructor(
    @InjectRepository(BrewingMethod)
    private readonly brewingMethodRepository: Repository<BrewingMethod>
  ) {}

  private getBrewingMethodRepository() {
    return this.brewingMethodRepository
      .createQueryBuilder('bm')
      .orderBy('bm.name', 'DESC');
  }

  public async getBrewingMethods(): Promise<BrewingMethod[]> {
    return await this.brewingMethodRepository.find();
  }

  public async getBrewingMethod(
    name: string
  ): Promise<BrewingMethod | undefined> {
    const query = this.getBrewingMethodRepository().andWhere(
      'bm.name = :name',
      {
        name,
      }
    );

    this.logger.debug(query.getSql());

    return await query.getOne();
  }

  public async createBrewingMethod(input: BrewingMethod) {
    return await this.brewingMethodRepository.save({
      ...input,
    });
  }

  public async updateBrewingMethod(id: number, input: BrewingMethodUpdateDto) {
    return await this.brewingMethodRepository
      .createQueryBuilder('bm')
      .update(BrewingMethod)
      .set({ ...input })
      .where('name = :name', { id })
      .execute();
  }

  public async deleteBrewingMethod(id: number) {
    return await this.brewingMethodRepository
      .createQueryBuilder('bm')
      .delete()
      .where('name = :name', { id })
      .execute();
  }
}
