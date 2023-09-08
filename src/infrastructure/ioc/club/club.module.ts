import { Module } from '@nestjs/common';
import { ClubRepository } from '@application/ports/club/club.repository';
import { InMemoryClubAdapter } from '@infrastructure/club/adapters/inMemoryClub.adapter';
import { FindOneClubByIdUseCase } from '@application/useCases/club/findOneClubById.useCase';
import { ClubController } from '@presentation/controllers/club/club.controller';

const findOneClubByIdUseCase = (clubRepository: ClubRepository) =>
  new FindOneClubByIdUseCase(clubRepository);

@Module({
  controllers: [ClubController],
  providers: [
    { provide: ClubRepository, useClass: InMemoryClubAdapter },
    {
      provide: FindOneClubByIdUseCase,
      useFactory: findOneClubByIdUseCase,
      inject: [ClubRepository],
    },
  ],
})
export class ClubModule {}
