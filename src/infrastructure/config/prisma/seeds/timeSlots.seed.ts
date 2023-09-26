import { TimeSlotDataEntity } from '@infrastructure/data/time-slot/entities/timeSlot.entity';
import { TimeSlotStatusEnum } from '../../../../core/common/enums/timeSlotsStatus.enum';
import { faker } from '@faker-js/faker';

export const TimeSlotListSeed: TimeSlotDataEntity[] = [
  {
    id: faker.string.uuid(),
    created_at: new Date(
      'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)',
    ),
    updated_at: null,
    deleted_at: null,
    start_at: new Date(2023, 4, 4, 14, 0),
    end_at: new Date(2023, 4, 4, 15, 30),
    name: 'time slot name 1',
    status: TimeSlotStatusEnum.NotStarted,
    description: 'time slot description 1',
    userId: '8e3399e6-1d94-11ec-9621-0242ac130002',
  },
  {
    id: faker.string.uuid(),
    created_at: new Date(
      'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)',
    ),
    updated_at: null,
    deleted_at: null,
    start_at: new Date(2023, 4, 4, 15, 50),
    end_at: new Date(2023, 4, 4, 17, 0),
    name: 'time slot name 2',
    status: TimeSlotStatusEnum.NotStarted,
    description: 'time slot description 2',
    userId: '8e3399e6-1d94-11ec-9621-0242ac130002',
  },
  {
    id: faker.string.uuid(),
    created_at: new Date(
      'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)',
    ),
    updated_at: null,
    deleted_at: null,
    start_at: new Date(2023, 4, 4, 17, 0),
    end_at: new Date(2023, 4, 4, 18, 30),
    name: 'time slot name 3',
    status: TimeSlotStatusEnum.NotStarted,
    description: 'time slot description 3',
    userId: '8e3399e6-1d94-11ec-9621-0242ac130002',
  },
  {
    id: faker.string.uuid(),
    created_at: new Date(
      'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)',
    ),
    updated_at: null,
    deleted_at: null,
    start_at: new Date(2023, 4, 4, 14, 0),
    end_at: new Date(2023, 4, 4, 15, 30),
    name: 'time slot name 1',
    status: TimeSlotStatusEnum.NotStarted,
    description: 'time slot description 1',
    userId: '9371f314-1c93-11ec-9621-0242ac130002',
  },
  {
    id: faker.string.uuid(),
    created_at: new Date(
      'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)',
    ),
    updated_at: null,
    deleted_at: null,
    start_at: new Date(2023, 4, 4, 15, 50),
    end_at: new Date(2023, 4, 4, 17, 0),
    name: 'time slot name 2',
    status: TimeSlotStatusEnum.NotStarted,
    description: 'time slot description 2',
    userId: '9371f314-1c93-11ec-9621-0242ac130002',
  },
  {
    id: faker.string.uuid(),
    created_at: new Date(
      'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)',
    ),
    updated_at: null,
    deleted_at: null,
    start_at: new Date(2023, 4, 4, 17, 0),
    end_at: new Date(2023, 4, 4, 18, 30),
    name: 'time slot name 3',
    status: TimeSlotStatusEnum.NotStarted,
    description: 'time slot description 3',
    userId: '9371f314-1c93-11ec-9621-0242ac130002',
  },
];
