import { TimeSlotStatusEnum } from '../../../core/common/enums/timeSlotsStatus.enum';

export interface CreateTimeSlotRequestDto {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: TimeSlotStatusEnum;
  userId: string;
}
