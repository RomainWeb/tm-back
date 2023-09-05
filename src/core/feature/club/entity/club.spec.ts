import ClubModel from './club.model';

describe('club', () => {
  let club: ClubModel;

  beforeEach(() => {
    club = new ClubModel('test name club');
  });

  it('should have a name', () => {
    expect(club.name).toEqual('test name club');
  });
});
