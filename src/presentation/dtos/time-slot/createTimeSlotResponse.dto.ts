import { TimeSlotStatusEnum } from '../../../core/common/enums/timeSlotsStatus.enum';

export interface CreateTimeSlotResponseDto {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: TimeSlotStatusEnum;
}
