import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';
import { TimeSlotBuilder } from '@domain/time-slot/builders/timeSlot.buidler';
import { TimeSlotStatusEnum } from '@core/common/enums/timeSlotsStatus.enum';
import { DaysEnum } from '@core/common/enums/days.enum';

export const TIME_SLOT_MOCK_LIST: TimeSlotEntity[] = [
  new TimeSlotBuilder()
    .withId('1504d380-c058-488b-a10e-b42523de95fe')
    .withStartDate(new Date(2023, 4, 4, 14, 0))
    .withEndDate(new Date(2023, 4, 4, 15, 30))
    .withDescription('test description 1')
    .withStatus(TimeSlotStatusEnum.Undecided)
    .withDay(DaysEnum.Monday)
    .build(),
  new TimeSlotBuilder()
    .withId('1504d380-c058-488b-a10e-b42523de95fe')
    .withStartDate(new Date(2023, 4, 4, 15, 30))
    .withEndDate(new Date(2023, 4, 4, 17, 0))
    .withDescription('test description 2')
    .withStatus(TimeSlotStatusEnum.Undecided)
    .withDay(DaysEnum.Monday)
    .build(),
  new TimeSlotBuilder()
    .withId('1504d380-c058-488b-a10e-b42523de95fe')
    .withStartDate(new Date(2023, 4, 4, 17, 0))
    .withEndDate(new Date(2023, 4, 4, 18, 30))
    .withDescription('test description 3')
    .withStatus(TimeSlotStatusEnum.Undecided)
    .withDay(DaysEnum.Monday)
    .build(),
  new TimeSlotBuilder()
    .withId('1504d380-c058-488b-a10e-b42523de95fe')
    .withStartDate(new Date(2023, 4, 4, 18, 30))
    .withEndDate(new Date(2023, 4, 4, 20, 0))
    .withDescription('test description 4')
    .withStatus(TimeSlotStatusEnum.Undecided)
    .withDay(DaysEnum.Monday)
    .build(),
  new TimeSlotBuilder()
    .withId('1504d380-c058-488b-a10e-b42523de95fe')
    .withStartDate(new Date(2023, 4, 4, 20, 0))
    .withEndDate(new Date(2023, 4, 4, 21, 30))
    .withDescription('test description 5')
    .withStatus(TimeSlotStatusEnum.Undecided)
    .withDay(DaysEnum.Monday)
    .build(),
];
