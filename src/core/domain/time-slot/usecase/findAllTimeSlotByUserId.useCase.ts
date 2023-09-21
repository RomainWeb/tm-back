import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';
import { Inject } from '@nestjs/common';
import { TimeSlotPort } from '@domain/time-slot/ports/timeSlot.port';

export class FindAllTimeSlotByUserIdUseCase {
  constructor(@Inject() private timeSlotPort: TimeSlotPort) {}

  execute(userId?: number): Promise<TimeSlotEntity[]> {
    return this.timeSlotPort.findAll(userId);
  }
}
