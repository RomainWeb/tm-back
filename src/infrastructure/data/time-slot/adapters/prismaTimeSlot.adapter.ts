import { TimeSlotPort } from '@domain/time-slot/ports/timeSlot.port';
import { PrismaClient } from '@prisma/client';
import { CreateTimeSlotRequestDto } from '@presentation/dtos/time-slot/createTimeSlotRequest.dto';
import { CreateTimeSlotResponseDto } from '@presentation/dtos/time-slot/createTimeSlotResponse.dto';
import { FindAllTimeSlotsResponseDto } from '@presentation/dtos/time-slot/findAllTimeSlotsResponse.dto';
import { TimeSlotStatusEnum } from '../../../../core/common/enums/timeSlotsStatus.enum';
import { DaysEnum } from '../../../../core/common/enums/days.enum';

export class PrismaTimeSlotAdapter
  extends PrismaClient
  implements TimeSlotPort
{
  async findAll(userId: string): Promise<FindAllTimeSlotsResponseDto[]> {
    const timeSlots = await this.time_slots.findMany({ where: { userId } });
    return timeSlots.map((timeSlot) => {
      return {
        id: timeSlot.id,
        status: TimeSlotStatusEnum[timeSlot.status],
        name: timeSlot.name,
        description: timeSlot.description,
        startDate: timeSlot.start_at,
        endDate: timeSlot.end_at,
        day: DaysEnum[timeSlot.day],
      };
    });
  }

  async create(
    data: CreateTimeSlotRequestDto,
  ): Promise<CreateTimeSlotResponseDto> {
    const newTimeSlot = await this.time_slots.create({
      data: {
        name: data.name,
        status: TimeSlotStatusEnum[data.status],
        day: DaysEnum[data.day],
        start_at: new Date(data.startDate),
        end_at: new Date(data.endDate),
        description: data.description,
        created_at: new Date(),
        updated_at: null,
        deleted_at: null,
        userId: data.userId,
      },
    });

    return Promise.resolve({
      id: newTimeSlot.id,
      status: TimeSlotStatusEnum[newTimeSlot.status],
      name: newTimeSlot.name,
      description: newTimeSlot.description,
      startDate: newTimeSlot.start_at,
      endDate: newTimeSlot.end_at,
      day: DaysEnum[newTimeSlot.day],
    });
  }
}
