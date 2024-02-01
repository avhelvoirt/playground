import { Injectable, Logger } from '@nestjs/common';
import { GrindService } from '../grind/grind.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Brewing } from './brewing.entity';
import { Repository } from 'typeorm';
import { BrewingCreateDto } from './dto/brewing-create.dto';
import { BrewingUpdateDto } from './dto/brewing-update.dto';

@Injectable()
export class BrewingService {
  private logger = new Logger(GrindService.name);

  constructor(
    @InjectRepository(Brewing)
    private readonly brewingRepository: Repository<Brewing>
  ) {}

  private getBrewingBaseRepository() {
    return this.brewingRepository
      .createQueryBuilder('b')
      .orderBy('b.id', 'DESC');
  }

  public async getBrewings(): Promise<Brewing[]> {
    return await this.brewingRepository.find();
  }

  public async getBrewing(id: number): Promise<Brewing> {
    const query = this.getBrewingBaseRepository().andWhere('b.id = :id', {
      id,
    });

    this.logger.debug(query.getSql());

    return await query.getOne();
  }

  public async createBrewing(input: BrewingCreateDto) {
    return await this.brewingRepository.save({
      ...input,
    });
  }

  public async updateBrewing(id: number, input: BrewingUpdateDto) {
    return await this.brewingRepository
      .createQueryBuilder('b')
      .update(Brewing)
      .set({ ...input })
      .where('id = :id', { id })
      .execute();
  }

  public async deleteBrewing(id: number) {
    return await this.brewingRepository
      .createQueryBuilder('b')
      .delete()
      .where('id = :id', { id })
      .execute();
  }
}
