import { Inject } from '@nestjs/common';
import { TimeSlotPort } from '@domain/time-slot/ports/timeSlot.port';
import { FindAllTimeSlotsResponseDto } from '@presentation/dtos/time-slot/findAllTimeSlotsResponse.dto';

export class FindAllTimeSlotByUserIdUseCase {
  constructor(@Inject() private timeSlotPort: TimeSlotPort) {}

  execute(userId?: string): Promise<FindAllTimeSlotsResponseDto[]> {
    return this.timeSlotPort.findAll(userId);
  }
}
