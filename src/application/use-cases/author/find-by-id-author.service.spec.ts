import { Test, TestingModule } from '@nestjs/testing';
import { FindByIdAuthorService } from './find-by-id-author.service';

describe('FindByIdAuthorController', () => {
  let findByIdAuthorService: FindByIdAuthorService;
 
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
            provide: FindByIdAuthorService,
            useValue: {
                execute: jest.fn()
            }  
        },
      ],
    }).compile();

    findByIdAuthorService = module.get<FindByIdAuthorService>(FindByIdAuthorService);
});

  it('should be defined find by id service', () => {
    expect(findByIdAuthorService).toBeDefined();
  });

  describe('find by id author', () => {
      it.todo('should return a author for id successfully');
      it.todo('should throw an exception');
  });  
});