import { GrindService } from './grind.service';
import { Repository } from 'typeorm';
import { Grind } from './grind.entity';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('grindService', () => {
  let service: GrindService;
  let repository: Repository<Grind>;
  let selectQb;
  let deleteQb;

  beforeEach(async () => {
    deleteQb = {
      where: jest.fn(),
      execute: jest.fn(),
    };

    selectQb = {
      delete: jest.fn().mockReturnValue(deleteQb),
      where: jest.fn(),
      execute: jest.fn(),
      orderBy: jest.fn(),
      leftJoinAndSelect: jest.fn(),
    };

    const module = await Test.createTestingModule({
      providers: [
        GrindService,
        {
          provide: getRepositoryToken(Grind),
          useValue: {
            save: jest.fn(),
            update: jest.fn(),
            createQueryBuilder: jest.fn().mockReturnValue(selectQb),
            delete: jest.fn(),
            where: jest.fn(),
            execute: jest.fn(),
          },
        },
      ],
    }).compile();
    service = module.get<GrindService>(GrindService);
    repository = module.get<Repository<Grind>>(getRepositoryToken(Grind));
  });

  describe('deleteGrind', () => {
    it('should delete a grind ', async () => {
      const createQueryBuilderSpy = jest.spyOn(
        repository,
        'createQueryBuilder'
      );
      const deleteSpy = jest.spyOn(selectQb, 'delete');
      const whereSpy = jest.spyOn(deleteQb, 'where').mockReturnValue(deleteQb);
      const executeSpy = jest.spyOn(deleteQb, 'execute');

      await expect(service.deleteGrind(1)).resolves.toBe(undefined);
      expect(createQueryBuilderSpy).toHaveBeenCalledTimes(1);
      expect(createQueryBuilderSpy).toHaveBeenCalledWith('g');

      expect(deleteSpy).toHaveBeenCalledTimes(1);
      expect(whereSpy).toHaveBeenCalledTimes(1);
      expect(whereSpy).toHaveBeenCalledWith('id = :id', { id: 1 });
      expect(executeSpy).toHaveBeenCalledTimes(1);
    });
  });
});
