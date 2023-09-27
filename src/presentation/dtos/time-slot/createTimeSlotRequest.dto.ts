import { TimeSlotStatusEnum } from '@core/common/enums/timeSlotsStatus.enum';
import { DaysEnum } from '@core/common/enums/days.enum';

export interface CreateTimeSlotRequestDto {
  id?: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: TimeSlotStatusEnum;
  userId?: string;
  day: DaysEnum;
}
