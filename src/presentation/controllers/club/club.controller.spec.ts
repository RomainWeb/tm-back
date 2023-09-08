import { Test, TestingModule } from '@nestjs/testing';
import { ClubController } from './club.controller';
import { FindOneClubByIdUseCase } from '@application/useCases/club/findOneClubById.useCase';
import { ClubRepository } from '@application/ports/club/club.repository';
import { InMemoryClubAdapter } from '@infrastructure/club/adapters/inMemoryClub.adapter';

describe('ClubController', () => {
  let controller: ClubController;
  const findOneClubByIdUseCase = (clubRepository: ClubRepository) =>
    new FindOneClubByIdUseCase(clubRepository);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClubController],
      providers: [
        { provide: ClubRepository, useClass: InMemoryClubAdapter },
        {
          provide: FindOneClubByIdUseCase,
          useFactory: findOneClubByIdUseCase,
          inject: [ClubRepository],
        },
      ],
    }).compile();

    controller = module.get<ClubController>(ClubController);
  });

  it('should return a clubVM when call findOne by club id', (done) => {
    controller.findOne(2).then((club) => {
      expect(club).not.toBeNull();
      done();
    });
  });
});
