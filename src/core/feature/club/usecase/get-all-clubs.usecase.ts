import { ClubRepository } from '@club/repository/club.repository';
import ClubModel from '@club/entity/club.model';
import { Inject } from '@nestjs/common';

export default class GetAllClubsUseCase {
  constructor(@Inject(ClubRepository) private clubRepository: ClubRepository) {}

  async execute(): Promise<ClubModel[]> {
    return await this.clubRepository.findAll();
  }
}
