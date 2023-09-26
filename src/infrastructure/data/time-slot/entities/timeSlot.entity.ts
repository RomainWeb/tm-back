import { TimeSlotStatusEnum } from '../../../../core/common/enums/timeSlotsStatus.enum';
import { BaseDataEntity } from '@infrastructure/data/common/entities/baseDataEntity';

export interface TimeSlotDataEntity extends BaseDataEntity {
  id?: string;
  start_at: Date;
  end_at: Date;
  description: string;
  status: TimeSlotStatusEnum;
  userId: string;
  name: string;
}
