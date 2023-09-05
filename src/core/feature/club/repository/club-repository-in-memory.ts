import { ClubRepository } from './club.repository';
import ClubModel from '../entity/club.model';

export default class ClubRepositoryInMemory implements ClubRepository {
  private clubDatas: ClubModel[] = [
    { id: '1', name: 'club name 1' },
    { id: '2', name: 'club name 2' },
    { id: '3', name: 'club name 3' },
    { id: '4', name: 'club name 4' },
    { id: '5', name: 'club name 5' },
  ];

  findAll(): Promise<ClubModel[]> {
    const clubs = [...this.clubDatas];
    return Promise.resolve(clubs);
  }
}
