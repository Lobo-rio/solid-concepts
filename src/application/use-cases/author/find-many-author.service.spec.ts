import { Test, TestingModule } from '@nestjs/testing';
import { FindManyAuthorService } from './find-many-author.service';

describe('FindByEmailAuthorController', () => {
  let findManyAuthorService: FindManyAuthorService;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
            provide: FindManyAuthorService,
            useValue: {
                execute: jest.fn()
            }  
        },
      ],
    }).compile();

    findManyAuthorService = module.get<FindManyAuthorService>(FindManyAuthorService);
});

  it('should be defined find many service', () => {
    expect(findManyAuthorService).toBeDefined();
  });

  describe('find many author', () => {
      it.todo('should return a list author successfully');
      it.todo('should throw an exception');
  });  
});