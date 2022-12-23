import { Test, TestingModule } from '@nestjs/testing';
import { FindByEmailAuthorService } from './find-by-email-author.service';

describe('FindByEmailAuthorController', () => {
  let findByEmailAuthorService: FindByEmailAuthorService;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
            provide: FindByEmailAuthorService,
            useValue: {
                execute: jest.fn()
            }  
        },
      ],
    }).compile();

    findByEmailAuthorService = module.get<FindByEmailAuthorService>(FindByEmailAuthorService);
});

  it('should be defined find by email service', () => {
    expect(findByEmailAuthorService).toBeDefined();
  });

  describe('find by email author', () => {
      it.todo('should return a author for email successfully');
      it.todo('should throw an exception');
  });  
});