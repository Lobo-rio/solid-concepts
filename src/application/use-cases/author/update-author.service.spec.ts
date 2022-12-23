import { Test, TestingModule } from '@nestjs/testing';
import { UpdateAuthorService } from './update-author.service';

describe('UpdateAuthorController', () => {
  let updateAuthorService: UpdateAuthorService;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
            provide: UpdateAuthorService,
            useValue: {
                execute: jest.fn()
            }  
        },
      ],
    }).compile();

    updateAuthorService = module.get<UpdateAuthorService>(UpdateAuthorService);
});

  it('should be defined update service', () => {
    expect(updateAuthorService).toBeDefined();
  });

  describe('create author', () => {
      it.todo('should return a author created successfully');
      it.todo('should throw an exception');
  });  
});