import { TimeSlotPort } from '@domain/time-slot/ports/timeSlot.port';
import { InMemoryTimeSlotAdapter } from '@infrastructure/data/time-slot/adapters/inMemoryTimeSlot.adapter';
import { TIME_SLOT_MOCK_LIST } from '../../../mock/timeSlotList.mock';
import { CreateTimeSlotUseCase } from '@domain/time-slot/usecase/createTimeSlot.useCase';
import { TimeSlotStatusEnum } from '../../../../core/common/enums/timeSlotsStatus.enum';
import { CreateTimeSlotRequestDto } from '@presentation/dtos/time-slot/createTimeSlotRequest.dto';

describe('create a time slot use case', () => {
  it('should return the time slot after it was created', (done) => {
    const timeSlot: TimeSlotPort = new InMemoryTimeSlotAdapter(
      TIME_SLOT_MOCK_LIST,
    );

    const createTimeSlotUseCase = new CreateTimeSlotUseCase(timeSlot);

    const newTimeSlot: CreateTimeSlotRequestDto = {
      name: 'new time slot',
      startDate: new Date(2023, 4, 4, 14, 0).toISOString(),
      endDate: new Date(2023, 4, 4, 15, 30).toISOString(),
      status: TimeSlotStatusEnum.NotStarted,
      description: 'time slot tennis description',
    };

    createTimeSlotUseCase.execute(newTimeSlot).then((result) => {
      expect(result).toEqual(newTimeSlot);
      done();
    });
  });
});
