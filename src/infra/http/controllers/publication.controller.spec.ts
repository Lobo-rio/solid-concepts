import { Test, TestingModule } from '@nestjs/testing';
import { CreatePublicationService } from '../../../application/use-cases/publication/create-publication.service';
import { FindByIdPublicationService } from '../../../application/use-cases/publication/find-by-id-publication.service';
import { FindManyPublicationService } from '../../../application/use-cases/publication/find-many-publication.service';
import { FindByAuthorPublicationService } from '../../../application/use-cases/publication/find-by-author-publication.service';
import { RemovePublicationService } from '../../../application/use-cases/publication/remove-publication.service';
import { UpdatePublicationService } from '../../../application/use-cases/publication/update-publication.service';
import { PublicationController } from './publication.controller';

describe('PublicationController', () => {
  let publicationController: PublicationController;
  let createPublicationService: CreatePublicationService;
  let updatePublicationService: UpdatePublicationService;
  let removePublicationService: RemovePublicationService;
  let findManyPublicationService: FindManyPublicationService;
  let findByIdPublicationService: FindByIdPublicationService;
  let findByAuthorPublicationService: FindByAuthorPublicationService;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicationController],
      providers: [
        {
            provide: CreatePublicationService,
            useValue: {
                execute: jest.fn()
            }  
        },
        {
            provide: UpdatePublicationService,
            useValue: {
                execute: jest.fn()
            }  
        },
        {
            provide: RemovePublicationService,
            useValue: {
                execute: jest.fn()
            }  
        },
        {
            provide: FindManyPublicationService,
            useValue: {
                execute: jest.fn()
            }  
        },
        {
            provide: FindByIdPublicationService,
            useValue: {
                execute: jest.fn()
            }  
        },
        {
            provide: FindByAuthorPublicationService,
            useValue: {
                execute: jest.fn()
            }  
        },
      ],
    }).compile();

    publicationController = module.get<PublicationController>(PublicationController);
    createPublicationService = module.get<CreatePublicationService>(CreatePublicationService);
    updatePublicationService = module.get<UpdatePublicationService>(UpdatePublicationService);
    removePublicationService = module.get<RemovePublicationService>(RemovePublicationService);
    findManyPublicationService = module.get<FindManyPublicationService>(FindManyPublicationService);
    findByIdPublicationService = module.get<FindByIdPublicationService>(FindByIdPublicationService);
    findByAuthorPublicationService = module.get<FindByAuthorPublicationService>(FindByAuthorPublicationService);
  });

  it('should be defined controller', () => {
    expect(publicationController).toBeDefined();
    expect(createPublicationService).toBeDefined();
    expect(updatePublicationService).toBeDefined();
    expect(removePublicationService).toBeDefined();
    expect(findManyPublicationService).toBeDefined();
    expect(findByIdPublicationService).toBeDefined();
    expect(findByAuthorPublicationService).toBeDefined();
  });

  describe('create publication', () => {
      it.todo('should return a publication created successfully');
      it.todo('should throw an exception');
  });

  describe('update publication', () => {
    it.todo('should return a publication updated successfully');
    it.todo('should throw an exception');
  });

  describe('remove publication', () => {
    it.todo('should return a publication removed successfully');
    it.todo('should throw an exception');
  });

  describe('list publication', () => {
    it.todo('should return a publications list entity successfully');
    it.todo('should throw an exception');
  });

  describe('list the one publication', () => {
    it.todo('should return a publication entity successfully');
    it.todo('should throw an exception');
  });

  describe('list the list publication for author', () => {
    it.todo('should return a list publication for author entity successfully');
    it.todo('should throw an exception');
  });
  
});