import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrewingCategory } from './brewing-category.entity';
import { Repository } from 'typeorm';
import { BrewingCategoryCreateDto } from './dto/brewing-category-create.dto';
import { BrewingCategoryUpdateDto } from './dto/brewing-category-update.dto';

@Injectable()
export class BrewingCategoryService {
  private logger = new Logger(BrewingCategoryService.name);

  constructor(
    @InjectRepository(BrewingCategory)
    private readonly brewingRepository: Repository<BrewingCategory>
  ) {}

  private getBrewingCategoryBaseRepository() {
    return this.brewingRepository
      .createQueryBuilder('bc')
      .orderBy('bc.id', 'DESC');
  }

  public async getBrewingCategories(): Promise<BrewingCategory[]> {
    return await this.brewingRepository.find();
  }

  public async getBrewingCategory(
    id: number
  ): Promise<BrewingCategory | undefined> {
    const query = this.getBrewingCategoryBaseRepository().andWhere(
      'bc.id = :id',
      {
        id,
      }
    );
    this.logger.debug(query.getSql());

    return await query.getOne();
  }

  public async createBrewingCategory(input: BrewingCategoryCreateDto) {
    return await this.brewingRepository.save({
      ...input,
    });
  }

  public async updateBrewingCategory(
    id: number,
    input: BrewingCategoryUpdateDto
  ) {
    return await this.brewingRepository
      .createQueryBuilder('bc')
      .update(BrewingCategory)
      .set({ ...input })
      .where('id = :id', { id })
      .execute();
  }

  public async deleteBrewingCategory(id: number) {
    return await this.brewingRepository
      .createQueryBuilder('bc')
      .delete()
      .where('id = :id', { id })
      .execute();
  }
}
