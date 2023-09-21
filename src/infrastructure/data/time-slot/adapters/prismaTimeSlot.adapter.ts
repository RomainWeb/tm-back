import { TimeSlotPort } from '@domain/time-slot/ports/timeSlot.port';
import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';
import { PrismaClient } from '@prisma/client';

export class PrismaTimeSlotAdapter
  extends PrismaClient
  implements TimeSlotPort
{
  findAll(userId: number): Promise<TimeSlotEntity[]> {
    return this.timeSlots.findMany({ where: { userId } });
  }
}
