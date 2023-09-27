import { TimeSlotPort } from '@domain/time-slot/ports/timeSlot.port';
import { InMemoryTimeSlotAdapter } from '@infrastructure/data/time-slot/adapters/inMemoryTimeSlot.adapter';
import { TIME_SLOT_MOCK_LIST } from '../../../mock/timeSlotList.mock';
import { CreateTimeSlotUseCase } from '@domain/time-slot/usecase/createTimeSlot.useCase';
import { TimeSlotStatusEnum } from '@core/common/enums/timeSlotsStatus.enum';
import { CreateTimeSlotRequestDto } from '@presentation/dtos/time-slot/createTimeSlotRequest.dto';
import { DaysEnum } from '@core/common/enums/days.enum';

describe('create a time slot use case', () => {
  it('should return the time slot after it was created', (done) => {
    const timeSlot: TimeSlotPort = new InMemoryTimeSlotAdapter(
      TIME_SLOT_MOCK_LIST,
    );

    const createTimeSlotUseCase = new CreateTimeSlotUseCase(timeSlot);

    const newTimeSlot: CreateTimeSlotRequestDto = {
      id: '04151d3b-3898-4955-8a82-4d796fb10c48',
      name: 'new time slot',
      startDate: new Date(2023, 4, 4, 14, 0),
      endDate: new Date(2023, 4, 4, 15, 30),
      status: TimeSlotStatusEnum.Undecided,
      description: 'time slot tennis description',
      day: DaysEnum.Monday,
    };

    createTimeSlotUseCase.execute(newTimeSlot).then((result) => {
      expect(result).toEqual(newTimeSlot);
      done();
    });
  });
});
