import { TimeSlotStatusEnum } from '../../../common/enums/timeSlotsStatus.enum';
import { TimeSlotBuilder } from '@domain/time-slot/builders/timeSlot.buidler';

export class TimeSlotEntity {
  id: number;
  startDate: Date;
  endDate: Date;
  description: string;
  status: TimeSlotStatusEnum;
  userId: number;

  constructor(builder: TimeSlotBuilder) {
    this.id = builder.id;
    this.startDate = builder.startDate;
    this.endDate = builder.endDate;
    this.description = builder.description;
    this.status = builder.status;
    this.userId = builder.userId;
  }
}
