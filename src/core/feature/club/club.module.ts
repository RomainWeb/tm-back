import { Module } from '@nestjs/common';
import { ClubController } from './club.controller';
import { ClubRepository } from '@club/repository/club.repository';
import ClubRepositoryInMemory from '@club/repository/club-repository-in-memory';
import GetAllClubsUseCase from '@club/usecase/get-all-clubs.usecase';

const getAllClubsUseCaseFactory = (clubRepository: ClubRepository) =>
  new GetAllClubsUseCase(clubRepository);

@Module({
  controllers: [ClubController],
  providers: [
    { provide: ClubRepository, useClass: ClubRepositoryInMemory },
    {
      provide: GetAllClubsUseCase,
      useFactory: getAllClubsUseCaseFactory,
      inject: [ClubRepository],
    },
  ],
})
export class ClubModule {}
