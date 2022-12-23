import { Test, TestingModule } from '@nestjs/testing';
import { CreatePublicationService } from './create-publication.service';

describe('CreatePublicationController', () => {
  let createPublicationService: CreatePublicationService;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
            provide: CreatePublicationService,
            useValue: {
                execute: jest.fn()
            }  
        },
      ],
    }).compile();

    createPublicationService = module.get<CreatePublicationService>(CreatePublicationService);
});

  it('should be defined create service', () => {
    expect(createPublicationService).toBeDefined();
  });

  describe('create publication', () => {
      it.todo('should return a publication created successfully');
      it.todo('should throw an exception');
  });  
});