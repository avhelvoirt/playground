import { InjectRepository } from '@nestjs/typeorm';
import { Grind } from './grind.entity';
import { Repository } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { GrindCreateDto } from './dto/grind-create.dto';
import { GrindUpdateDto } from './dto/grind-update.dto';

@Injectable()
export class GrindService {
  private logger = new Logger(GrindService.name);
  constructor(
    @InjectRepository(Grind)
    private readonly grindRepository: Repository<Grind>
  ) {}

  private getGrindBaseRepository() {
    return this.grindRepository.createQueryBuilder('g').orderBy('g.id', 'DESC');
  }

  public async getGrinds(): Promise<Grind[]> {
    return await this.grindRepository.find();
  }

  public async getGrind(id: number): Promise<Grind | undefined> {
    const query = this.getGrindBaseRepository().andWhere('g.id = :id', {
      id,
    });

    this.logger.debug(query.getSql());

    return await query.getOne();
  }

  public async createGrind(input: GrindCreateDto) {
    return await this.grindRepository.save({
      ...input,
    });
  }

  public async updateGrind(id: number, input: GrindUpdateDto) {
    return await this.grindRepository
      .createQueryBuilder('g')
      .update(Grind)
      .set({ ...input })
      .where('id = :id', { id })
      .execute();
  }

  public async deleteGrind(id: number) {
    return await this.grindRepository
      .createQueryBuilder('g')
      .delete()
      .where('id = :id', { id })
      .execute();
  }
}
