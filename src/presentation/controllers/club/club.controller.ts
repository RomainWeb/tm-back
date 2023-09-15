import { Controller, Get, Param } from '@nestjs/common';
import { FindOneClubByIdUseCase } from '@domain/club/usecase/findOneClubById.useCase';
import { ClubEntity } from '@domain/club/entities/club.entity';

@Controller('club')
export class ClubController {
  constructor(private findOneClubById: FindOneClubByIdUseCase) {}

  @Get(':clubId')
  async findOne(@Param('clubId') clubId: number): Promise<ClubEntity> {
    return await this.findOneClubById.execute(+clubId);
  }
}
