import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';

export abstract class TimeSlotPort {
  abstract findAll(userId: number): Promise<TimeSlotEntity[]>;
}
