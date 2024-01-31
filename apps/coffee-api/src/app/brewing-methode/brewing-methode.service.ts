import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrewingMethode } from './brewing-methode.entity';
import { Repository } from 'typeorm';
import { BrewingMethodeUpdateDto } from './dto/brewing-methode-update.dto';

@Injectable()
export class BrewingMethodeService {
  private logger = new Logger(BrewingMethodeService.name);
  constructor(
    @InjectRepository(BrewingMethode)
    private readonly brewingMethodeRepository: Repository<BrewingMethode>
  ) {}

  private getBrewingMethodeRepository() {
    return this.brewingMethodeRepository
      .createQueryBuilder('bm')
      .orderBy('bm.name', 'DESC');
  }

  public async getBrewingMethods(): Promise<BrewingMethode[]> {
    return await this.brewingMethodeRepository.find();
  }

  public async getBrewingMethode(
    name: string
  ): Promise<BrewingMethode | undefined> {
    const query = this.getBrewingMethodeRepository().andWhere(
      'bm.name = :name',
      {
        name,
      }
    );

    this.logger.debug(query.getSql());

    return await query.getOne();
  }

  public async createBrewingMethode(input: BrewingMethode) {
    return await this.brewingMethodeRepository.save({
      ...input,
    });
  }

  public async updateBrewingMethode(
    id: number,
    input: BrewingMethodeUpdateDto
  ) {
    return await this.brewingMethodeRepository
      .createQueryBuilder('bm')
      .update(BrewingMethode)
      .set({ ...input })
      .where('name = :name', { id })
      .execute();
  }

  public async deleteBrewingMethode(id: number) {
    return await this.brewingMethodeRepository
      .createQueryBuilder('bm')
      .delete()
      .where('name = :name', { id })
      .execute();
  }
}
