import ClubModel from '../entity/club.model';

export abstract class ClubRepository {
  abstract findAll(): Promise<ClubModel[]>;
}
