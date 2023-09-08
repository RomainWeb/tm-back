import { ClubRepository } from '@application/ports/club/club.repository';
import { InMemoryClubAdapter } from '@infrastructure/club/adapters/inMemoryClub.adapter';
import { FindOneClubByIdUseCase } from '@application/useCases/club/findOneClubById.useCase';
import { ClubEntity } from '@domain/entities/club.entity';

describe('find one club by id use case', () => {
  it('should return null when not found a club with id', (done) => {
    const club = new ClubEntity(
      'clubTwo',
      'logoUrl',
      'TCV',
      0,
      new Date(),
      'test@test.com',
      '30310 vergèze',
      2,
    );
    const clubRepository: ClubRepository = new InMemoryClubAdapter();
    const findOneClubByIdUseCase: FindOneClubByIdUseCase =
      new FindOneClubByIdUseCase(clubRepository);

    findOneClubByIdUseCase.execute(2).then((result) => {
      expect(result._id).toEqual(club._id);
      expect(result._name).toEqual(club._name);
      expect(result._address).toEqual(club._address);
      expect(result._emailContact).toEqual(club._emailContact);
      expect(result._logoUrl).toEqual(club._logoUrl);
      expect(result._sportType).toEqual(club._sportType);
      done();
    });
  });
});
