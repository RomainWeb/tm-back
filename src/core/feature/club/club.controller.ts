import { Controller, Get, Param } from '@nestjs/common';
import GetAllClubsUseCase from '@club/usecase/get-all-clubs.usecase';
import ClubEntity from '@club/domain/entities/club.entity';

@Controller('clubs')
export class ClubController {
  constructor(private getAllClubsUseCase: GetAllClubsUseCase) {}

  @Get()
  findAll(): Promise<ClubEntity[]> {
    return this.getAllClubsUseCase.execute();
  }

  // @Get(':id')
  // findOne(@Param() params: number): Promise<any> {
  //   return of(params);
  // }
}
