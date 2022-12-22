import { Test, TestingModule } from '@nestjs/testing';
import { CreateAuthorService } from '../../../application/use-cases/author/create-author.service';
import { FindByIdAuthorService } from '../../../application/use-cases/author/find-by-id-author.service';
import { FindManyAuthorService } from '../../../application/use-cases/author/find-many-author.service';
import { RemoveAuthorService } from '../../../application/use-cases/author/remove-author.service';
import { UpdateAuthorService } from '../../../application/use-cases/author/update-author.service';
import { AuthorController } from './author.controller';

describe('AuthorController', () => {
  let authorController: AuthorController;
  let createAuthorService: CreateAuthorService;
  let updateAuthorService: UpdateAuthorService;
  let removeAuthorService: RemoveAuthorService;
  let findManyAuthorService: FindManyAuthorService;
  let findByIdAuthorService: FindByIdAuthorService;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorController],
      providers: [
        {
            provide: CreateAuthorService,
            useValue: {
                execute: jest.fn()
            }  
        },
        {
            provide: UpdateAuthorService,
            useValue: {
                execute: jest.fn()
            }  
        },
        {
            provide: RemoveAuthorService,
            useValue: {
                execute: jest.fn()
            }  
        },
        {
            provide: FindManyAuthorService,
            useValue: {
                execute: jest.fn()
            }  
        },
        {
            provide: FindByIdAuthorService,
            useValue: {
                execute: jest.fn()
            }  
        },
      ],
    }).compile();

    authorController = module.get<AuthorController>(AuthorController);
    createAuthorService = module.get<CreateAuthorService>(CreateAuthorService);
    updateAuthorService = module.get<UpdateAuthorService>(UpdateAuthorService);
    removeAuthorService = module.get<RemoveAuthorService>(RemoveAuthorService);
    findManyAuthorService = module.get<FindManyAuthorService>(FindManyAuthorService);
    findByIdAuthorService = module.get<FindByIdAuthorService>(FindByIdAuthorService);
  });

  it('should be defined controller', () => {
    expect(authorController).toBeDefined();
    expect(createAuthorService).toBeDefined();
    expect(updateAuthorService).toBeDefined();
    expect(removeAuthorService).toBeDefined();
    expect(findManyAuthorService).toBeDefined();
    expect(findManyAuthorService).toBeDefined();
  });

  describe('create author', () => {
      it.todo('should return a users list entity successfully');
      it.todo('should throw an exception');
  });

  describe('update author', () => {
    it.todo('should return a users list entity successfully');
    it.todo('should throw an exception');
  });

  describe('remove author', () => {
    it.todo('should return a users list entity successfully');
    it.todo('should throw an exception');
  });

  describe('list author', () => {
    it.todo('should return a users list entity successfully');
    it.todo('should throw an exception');
  });

  describe('list the one author', () => {
    it.todo('should return a users list entity successfully');
    it.todo('should throw an exception');
  });
  
});