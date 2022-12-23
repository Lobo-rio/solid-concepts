import { Test, TestingModule } from '@nestjs/testing';
import { FindByAuthorPublicationService } from './find-by-author-publication.service';

describe('CreatePublicationController', () => {
  let findByAuthorPublicationService: FindByAuthorPublicationService;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
            provide: FindByAuthorPublicationService,
            useValue: {
                execute: jest.fn()
            }  
        },
      ],
    }).compile();

    findByAuthorPublicationService = module.get<FindByAuthorPublicationService>(FindByAuthorPublicationService);
});

  it('should be defined find by id service', () => {
    expect(findByAuthorPublicationService).toBeDefined();
  });

  describe('a publication for author id', () => {
      it.todo('should return a publication for author id successfully');
      it.todo('should throw an exception');
  });  
});