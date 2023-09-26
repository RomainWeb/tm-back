import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { FindAllTimeSlotByUserIdUseCase } from '@domain/time-slot/usecase/findAllTimeSlotByUserId.useCase';
import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';
import { AuthGuard } from '@application/guard/auth.guard';
import { CreateTimeSlotRequestDto } from '@presentation/dtos/time-slot/createTimeSlotRequest.dto';
import { CreateTimeSlotResponseDto } from '@presentation/dtos/time-slot/createTimeSlotResponse.dto';
import { CreateTimeSlotUseCase } from '@domain/time-slot/usecase/createTimeSlot.useCase';
import { FindAllTimeSlotsResponseDto } from '@presentation/dtos/time-slot/findAllTimeSlotsResponse.dto';

@Controller('time-slot')
export class TimeSlotController {
  constructor(
    private findAllTimeSlotByUserIdUseCase: FindAllTimeSlotByUserIdUseCase,
    private createTimeSlotUseCase: CreateTimeSlotUseCase,
  ) {}

  @UseGuards(AuthGuard)
  @Get(':userId')
  async findAll(
    @Param('userId') userId: string,
  ): Promise<FindAllTimeSlotsResponseDto[]> {
    return await this.findAllTimeSlotByUserIdUseCase.execute(userId);
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(
    @Body() timSlot: CreateTimeSlotRequestDto,
  ): Promise<CreateTimeSlotResponseDto> {
    return await this.createTimeSlotUseCase.execute(timSlot);
  }
}
