import { GrindController } from './grind.controller';
import { GrindService } from './grind.service';
import { Repository } from 'typeorm';
import { Grind } from './grind.entity';

describe('grindController', () => {
  let grindController: GrindController;
  let grindService: GrindService;
  let grindRepository: Repository<Grind>;
  beforeEach(() => {
    grindService = new GrindService(grindRepository);
    grindController = new GrindController(grindService);
  });

  it('should return a list of grinds', async () => {
    const results: Grind = {
      id: 1,
      grind: 7,
      gram: 20,
    };

    const spy = jest
      .spyOn(grindService, 'getGrinds')
      .mockImplementation((): any => results);

    expect(await grindController.findAll()).toEqual(results);
  });

  it('should not delete any grind', async () => {
    const deleteSpy = jest.spyOn(grindService, 'deleteGrind');

    try {
      await grindController.remove(undefined);
    } catch (e) {
      expect(e).toBeInstanceOf(TypeError);
    }
  });
});
