import ClubRepositoryInMemory from '@club/data/adapters/club-repository-in-memory';
import { GetClubDetailsUseCase } from '@club/usecase/getClubDetails.useCase';
import { ClubRepository } from '@club/domain/repositories/club.repository';
import { clubsMock } from '@club/tests/mocks/clubs.mock';

describe('get club details use case', () => {
  it('should return details of a club by an id', () => {
    const clubRepository: ClubRepository = new ClubRepositoryInMemory();
    const getClubDetailsUseCase = new GetClubDetailsUseCase(clubRepository);

    expect(getClubDetailsUseCase.execute(2)).toEqual(clubsMock);
  });
});
