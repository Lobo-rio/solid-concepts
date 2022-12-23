import { Test, TestingModule } from '@nestjs/testing';
import { UpdatePublicationService } from './update-publication.service';

describe('CreatePublicationController', () => {
  let updatePublicationService: UpdatePublicationService;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
            provide: UpdatePublicationService,
            useValue: {
                execute: jest.fn()
            }  
        },
      ],
    }).compile();

    updatePublicationService = module.get<UpdatePublicationService>(UpdatePublicationService);
});

  it('should be defined update service', () => {
    expect(updatePublicationService).toBeDefined();
  });

  describe('update a publication for id', () => {
      it.todo('should return update a publication for id successfully');
      it.todo('should throw an exception');
  });  
});