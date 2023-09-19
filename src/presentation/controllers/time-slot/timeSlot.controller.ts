import { Controller, Get, Param } from '@nestjs/common';
import { FindAllTimeSlotByUserIdUseCase } from '@domain/time-slot/usecase/findAllTimeSlotByUserId.useCase';
import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';

@Controller('time-slot')
export class TimeSlotController {
  constructor(
    private findAllTimeSlotByUserIdUseCase: FindAllTimeSlotByUserIdUseCase,
  ) {}

  @Get(':userId')
  async findOne(@Param('userId') clubId: number): Promise<TimeSlotEntity[]> {
    return await this.findAllTimeSlotByUserIdUseCase.execute(+clubId);
  }
}
