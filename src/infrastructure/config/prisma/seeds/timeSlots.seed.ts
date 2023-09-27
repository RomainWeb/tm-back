import { TimeSlotDataEntity } from '@infrastructure/data/time-slot/entities/timeSlot.entity';
import { TimeSlotStatusEnum } from '../../../../core/common/enums/timeSlotsStatus.enum';
import { DaysEnum } from '../../../../core/common/enums/days.enum';

export const TimeSlotListSeed: TimeSlotDataEntity[] = [
  {
    created_at: new Date(
      'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)',
    ),
    updated_at: null,
    deleted_at: null,
    start_at: new Date(2023, 4, 4, 14, 0),
    end_at: new Date(2023, 4, 4, 15, 30),
    name: 'time slot name 1',
    day: DaysEnum.Monday,
    status: TimeSlotStatusEnum.Undecided,
    description: 'time slot description 1',
  },
  {
    created_at: new Date(
      'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)',
    ),
    updated_at: null,
    deleted_at: null,
    start_at: new Date(2023, 4, 4, 15, 50),
    end_at: new Date(2023, 4, 4, 17, 0),
    name: 'time slot name 2',
    day: DaysEnum.Monday,
    status: TimeSlotStatusEnum.Undecided,
    description: 'time slot description 2',
  },
  {
    created_at: new Date(
      'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)',
    ),
    updated_at: null,
    deleted_at: null,
    start_at: new Date(2023, 4, 4, 17, 0),
    end_at: new Date(2023, 4, 4, 18, 30),
    name: 'time slot name 3',
    day: DaysEnum.Monday,
    status: TimeSlotStatusEnum.Undecided,
    description: 'time slot description 3',
  },
  {
    created_at: new Date(
      'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)',
    ),
    updated_at: null,
    deleted_at: null,
    start_at: new Date(2023, 4, 4, 18, 30),
    end_at: new Date(2023, 4, 4, 20, 0),
    name: 'time slot name 4',
    day: DaysEnum.Monday,
    status: TimeSlotStatusEnum.Undecided,
    description: 'time slot description 4',
  },
];
