import { Controller, Get, Param } from '@nestjs/common';
import { FindOneClubByIdUseCase } from '@application/useCases/club/findOneClubById.useCase';
import { ClubEntity } from '@domain/entities/club.entity';

@Controller('club')
export class ClubController {
  constructor(private findOneClubById: FindOneClubByIdUseCase) {}

  @Get(':clubId')
  async findOne(@Param('clubId') clubId: number): Promise<ClubEntity> {
    return await this.findOneClubById.execute(+clubId);
  }
}
