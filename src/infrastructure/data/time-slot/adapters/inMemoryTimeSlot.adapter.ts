import { TimeSlotPort } from '@domain/time-slot/ports/timeSlot.port';
import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';
import { CreateTimeSlotRequestDto } from '@presentation/dtos/time-slot/createTimeSlotRequest.dto';
import { CreateTimeSlotResponseDto } from '@presentation/dtos/time-slot/createTimeSlotResponse.dto';
import { FindAllTimeSlotsResponseDto } from '@presentation/dtos/time-slot/findAllTimeSlotsResponse.dto';

export class InMemoryTimeSlotAdapter implements TimeSlotPort {
  constructor(private readonly timeSlots: TimeSlotEntity[]) {}

  findAll(userId: string): Promise<FindAllTimeSlotsResponseDto[]> {
    return Promise.resolve(this.timeSlots);
  }

  create(data: CreateTimeSlotRequestDto): Promise<CreateTimeSlotResponseDto> {
    return Promise.resolve({
      id: '04151d3b-3898-4955-8a82-4d796fb10c48',
      name: data.name,
      endDate: new Date(data.endDate),
      status: data.status,
      startDate: new Date(data.startDate),
      description: data.description,
      day: data.day,
    });
  }
}
