import { TimeSlotPort } from '@domain/time-slot/ports/timeSlot.port';
import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';

export class InMemoryTimeSlotAdapter implements TimeSlotPort {
  constructor(private readonly timeSlots: TimeSlotEntity[]) {}

  findAll(userId: number): Promise<TimeSlotEntity[]> {
    return Promise.resolve(this.timeSlots);
  }
}
