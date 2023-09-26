import { Inject } from '@nestjs/common';
import { UseCase } from '../../../common/usecase/UseCase';
import { TimeSlotPort } from '@domain/time-slot/ports/timeSlot.port';
import { CreateTimeSlotRequestDto } from '@presentation/dtos/time-slot/createTimeSlotRequest.dto';
import { CreateTimeSlotResponseDto } from '@presentation/dtos/time-slot/createTimeSlotResponse.dto';

export class CreateTimeSlotUseCase
  implements UseCase<CreateTimeSlotRequestDto, CreateTimeSlotResponseDto>
{
  constructor(@Inject() private timeSlotPort: TimeSlotPort) {}

  execute(data: CreateTimeSlotRequestDto): Promise<CreateTimeSlotResponseDto> {
    return this.timeSlotPort.create(data);
  }
}
