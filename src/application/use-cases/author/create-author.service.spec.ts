import { Test, TestingModule } from '@nestjs/testing';
import { CreateAuthorService } from './create-author.service';

describe('CreateAuthorController', () => {
  let createAuthorService: CreateAuthorService;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
            provide: CreateAuthorService,
            useValue: {
                execute: jest.fn()
            }  
        },
      ],
    }).compile();

    createAuthorService = module.get<CreateAuthorService>(CreateAuthorService);
});

  it('should be defined create service', () => {
    expect(createAuthorService).toBeDefined();
  });

  describe('create author', () => {
      it.todo('should return a author created successfully');
      it.todo('should throw an exception');
  });  
});