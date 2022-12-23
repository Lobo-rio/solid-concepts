import { Test, TestingModule } from '@nestjs/testing';
import { RemoveAuthorService } from './remove-author.service';

describe('RemoveAuthorController', () => {
  let removeAuthorService: RemoveAuthorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
            provide: RemoveAuthorService,
            useValue: {
                execute: jest.fn()
            }  
        },
      ],
    }).compile();

    removeAuthorService = module.get<RemoveAuthorService>(RemoveAuthorService);
});

  it('should be defined remove service', () => {
    expect(removeAuthorService).toBeDefined();
  });

  describe('remove author', () => {
      it.todo('should return a author removed successfully');
      it.todo('should throw an exception');
  });  
});