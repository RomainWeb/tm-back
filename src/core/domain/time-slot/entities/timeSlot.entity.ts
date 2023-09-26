import { TimeSlotStatusEnum } from '../../../common/enums/timeSlotsStatus.enum';
import { TimeSlotBuilder } from '@domain/time-slot/builders/timeSlot.buidler';

export class TimeSlotEntity {
  id: string;
  startDate: Date;
  endDate: Date;
  description: string;
  status: TimeSlotStatusEnum;
  userId: string;
  name: string;

  constructor(builder: TimeSlotBuilder) {
    this.id = builder.id;
    this.name = builder.name;
    this.startDate = builder.startDate;
    this.endDate = builder.endDate;
    this.description = builder.description;
    this.status = builder.status;
    this.userId = builder.userId;
  }
}
