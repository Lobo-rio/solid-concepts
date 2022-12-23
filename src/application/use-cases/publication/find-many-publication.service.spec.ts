import { Test, TestingModule } from '@nestjs/testing';
import { FindManyPublicationService } from './find-many-publication.service';

describe('CreatePublicationController', () => {
  let findManyPublicationService: FindManyPublicationService;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
            provide: FindManyPublicationService,
            useValue: {
                execute: jest.fn()
            }  
        },
      ],
    }).compile();

    findManyPublicationService = module.get<FindManyPublicationService>(FindManyPublicationService);
});

  it('should be defined list publication service', () => {
    expect(findManyPublicationService).toBeDefined();
  });

  describe('a list publication', () => {
      it.todo('should return a list publication successfully');
      it.todo('should throw an exception');
  });  
});