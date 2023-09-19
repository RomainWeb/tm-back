import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from '@infrastructure/config/environment-config/environment-config.module';
import { TimeSlotPort } from '@application/ports/time-slot/timeSlot.port';
import { FindAllTimeSlotByUserIdUseCase } from '@domain/time-slot/usecase/findAllTimeSlotByUserId.useCase';
import { InMemoryTimeSlotAdapter } from '@infrastructure/data/time-slot/adapters/inMemoryTimeSlot.adapter';
import { TIME_SLOT_MOCK_LIST } from '../../../test/mock/timeSlotList.mock';
import { TimeSlotController } from '@presentation/controllers/time-slot/timeSlot.controller';

const findAllTimeSlotByUserIdUseCase = (timeSlotPort: TimeSlotPort) =>
  new FindAllTimeSlotByUserIdUseCase(timeSlotPort);

const inMemoryTimeSlotAdapterFactory = () =>
  new InMemoryTimeSlotAdapter(TIME_SLOT_MOCK_LIST);

@Module({
  controllers: [TimeSlotController],
  imports: [EnvironmentConfigModule],
  providers: [
    { provide: TimeSlotPort, useFactory: inMemoryTimeSlotAdapterFactory },
    {
      provide: FindAllTimeSlotByUserIdUseCase,
      useFactory: findAllTimeSlotByUserIdUseCase,
      inject: [TimeSlotPort],
    },
  ],
})
export class TimeSlotModule {}
