import { Test, TestingModule } from '@nestjs/testing';
import { RemovePublicationService } from './remove-publication.service';

describe('CreatePublicationController', () => {
  let removePublicationService: RemovePublicationService;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
            provide: RemovePublicationService,
            useValue: {
                execute: jest.fn()
            }  
        },
      ],
    }).compile();

    removePublicationService = module.get<RemovePublicationService>(RemovePublicationService);
});

  it('should be defined remove service', () => {
    expect(removePublicationService).toBeDefined();
  });

  describe('remove a publication for id', () => {
      it.todo('should return remove a publication for id successfully');
      it.todo('should throw an exception');
  });  
});