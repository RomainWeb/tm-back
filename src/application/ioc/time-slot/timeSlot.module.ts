import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from '@infrastructure/config/environment-config/environment-config.module';
import { TimeSlotPort } from '@domain/time-slot/ports/timeSlot.port';
import { FindAllTimeSlotByUserIdUseCase } from '@domain/time-slot/usecase/findAllTimeSlotByUserId.useCase';
import { TimeSlotController } from '@presentation/controllers/time-slot/timeSlot.controller';
import { PrismaTimeSlotAdapter } from '@infrastructure/data/time-slot/adapters/prismaTimeSlot.adapter';
import { CreateTimeSlotUseCase } from '@domain/time-slot/usecase/createTimeSlot.useCase';

const findAllTimeSlotByUserIdUseCase = (timeSlotPort: TimeSlotPort) =>
  new FindAllTimeSlotByUserIdUseCase(timeSlotPort);

const createTimeSlotUseCase = (timeSlotPort: TimeSlotPort) =>
  new CreateTimeSlotUseCase(timeSlotPort);

// const inMemoryTimeSlotAdapterFactory = () =>
//   new InMemoryTimeSlotAdapter(TIME_SLOT_MOCK_LIST);

@Module({
  controllers: [TimeSlotController],
  imports: [EnvironmentConfigModule],
  providers: [
    { provide: TimeSlotPort, useClass: PrismaTimeSlotAdapter },
    {
      provide: FindAllTimeSlotByUserIdUseCase,
      useFactory: findAllTimeSlotByUserIdUseCase,
      inject: [TimeSlotPort],
    },
    {
      provide: CreateTimeSlotUseCase,
      useFactory: createTimeSlotUseCase,
      inject: [TimeSlotPort],
    },
  ],
})
export class TimeSlotModule {}
