import { Controller, Get, Param } from '@nestjs/common';
import GetAllClubsUseCase from '@club/usecase/get-all-clubs.usecase';
import ClubModel from '@club/entity/club.model';
import { of } from 'rxjs';

@Controller('clubs')
export class ClubController {
  constructor(private getAllClubsUseCase: GetAllClubsUseCase) {}

  @Get()
  findAll(): Promise<ClubModel[]> {
    return this.getAllClubsUseCase.execute();
  }

  // @Get(':id')
  // findOne(@Param() params: number): Promise<any> {
  //   return of(params);
  // }
}
