import { Test, TestingModule } from '@nestjs/testing';
import { FindByIdPublicationService } from './find-by-id-publication.service';

describe('CreatePublicationController', () => {
  let findByIdPublicationService: FindByIdPublicationService;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
            provide: FindByIdPublicationService,
            useValue: {
                execute: jest.fn()
            }  
        },
      ],
    }).compile();

    findByIdPublicationService = module.get<FindByIdPublicationService>(FindByIdPublicationService);
});

  it('should be defined find by id service', () => {
    expect(findByIdPublicationService).toBeDefined();
  });

  describe('a publication for id', () => {
      it.todo('should return a publication for id successfully');
      it.todo('should throw an exception');
  });  
});