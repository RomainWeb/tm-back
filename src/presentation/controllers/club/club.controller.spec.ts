import { Test, TestingModule } from '@nestjs/testing';
import { ClubController } from './club.controller';
import { FindOneClubByIdUseCase } from '@domain/club/usecase/findOneClubById.useCase';
import { ClubRepositoryPort } from '@application/ports/club/clubRepository.port';
import { InMemoryClubAdapter } from '@infrastructure/club/adapters/inMemoryClub.adapter';

describe('ClubController', () => {
  let controller: ClubController;
  const findOneClubByIdUseCase = (clubRepository: ClubRepositoryPort) =>
    new FindOneClubByIdUseCase(clubRepository);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClubController],
      providers: [
        { provide: ClubRepositoryPort, useClass: InMemoryClubAdapter },
        {
          provide: FindOneClubByIdUseCase,
          useFactory: findOneClubByIdUseCase,
          inject: [ClubRepositoryPort],
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
