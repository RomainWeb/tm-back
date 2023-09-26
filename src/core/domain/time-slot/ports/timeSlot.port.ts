import { CreateTimeSlotRequestDto } from '@presentation/dtos/time-slot/createTimeSlotRequest.dto';
import { CreateTimeSlotResponseDto } from '@presentation/dtos/time-slot/createTimeSlotResponse.dto';
import { FindAllTimeSlotsResponseDto } from '@presentation/dtos/time-slot/findAllTimeSlotsResponse.dto';

export abstract class TimeSlotPort {
  abstract findAll(userId: string): Promise<FindAllTimeSlotsResponseDto[]>;
  abstract create(
    data: CreateTimeSlotRequestDto,
  ): Promise<CreateTimeSlotResponseDto>;
}
