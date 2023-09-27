import { TimeSlotPort } from '@domain/time-slot/ports/timeSlot.port';
import { InMemoryTimeSlotAdapter } from '@infrastructure/data/time-slot/adapters/inMemoryTimeSlot.adapter';
import { FindAllTimeSlotByUserIdUseCase } from '@domain/time-slot/usecase/findAllTimeSlotByUserId.useCase';
import { TIME_SLOT_MOCK_LIST } from '../../../mock/timeSlotList.mock';

describe('find all time slots by user id', () => {
  it('should return a list of time slots with user id on params', (done) => {
    const timeSlotPort: TimeSlotPort = new InMemoryTimeSlotAdapter(
      TIME_SLOT_MOCK_LIST,
    );
    const findAllTimeSlotsByUserId: FindAllTimeSlotByUserIdUseCase =
      new FindAllTimeSlotByUserIdUseCase(timeSlotPort);

    findAllTimeSlotsByUserId
      .execute('1504d380-c058-488b-a10e-b42523de95fe')
      .then((result) => {
        expect(result).toEqual(TIME_SLOT_MOCK_LIST);
        done();
      });
  });
});
