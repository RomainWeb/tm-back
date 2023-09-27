import { TimeSlotStatusEnum } from '../../../common/enums/timeSlotsStatus.enum';
import { TimeSlotBuilder } from '@domain/time-slot/builders/timeSlot.buidler';
import { DaysEnum } from '../../../common/enums/days.enum';

export class TimeSlotEntity {
  id: string;
  startDate: Date;
  endDate: Date;
  description: string;
  status: TimeSlotStatusEnum;
  userId: string;
  name: string;
  day: DaysEnum;

  constructor(builder: TimeSlotBuilder) {
    this.id = builder.id;
    this.name = builder.name;
    this.startDate = builder.startDate;
    this.endDate = builder.endDate;
    this.description = builder.description;
    this.status = builder.status;
    this.userId = builder.userId;
    this.day = builder.day;
  }
}
