import { Module } from '@nestjs/common';
import { ClubRepositoryPort } from '@application/ports/club/clubRepository.port';
import { InMemoryClubAdapter } from '@infrastructure/club/adapters/inMemoryClub.adapter';
import { FindOneClubByIdUseCase } from '@domain/club/usecase/findOneClubById.useCase';
import { ClubController } from '@presentation/controllers/club/club.controller';
import { EnvironmentConfigModule } from '@infrastructure/config/environment-config/environment-config.module';

const findOneClubByIdUseCase = (clubRepository: ClubRepositoryPort) =>
  new FindOneClubByIdUseCase(clubRepository);

@Module({
  controllers: [ClubController],
  imports: [EnvironmentConfigModule],
  providers: [
    { provide: ClubRepositoryPort, useClass: InMemoryClubAdapter },
    {
      provide: FindOneClubByIdUseCase,
      useFactory: findOneClubByIdUseCase,
      inject: [ClubRepositoryPort],
    },
  ],
})
export class ClubModule {}
