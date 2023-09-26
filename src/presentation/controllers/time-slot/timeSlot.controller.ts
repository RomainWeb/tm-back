import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import { FindAllTimeSlotByUserIdUseCase } from '@domain/time-slot/usecase/findAllTimeSlotByUserId.useCase';
import { JwtAuthGuard } from '@application/guard/jwtAuth.guard';
import { CreateTimeSlotRequestDto } from '@presentation/dtos/time-slot/createTimeSlotRequest.dto';
import { CreateTimeSlotResponseDto } from '@presentation/dtos/time-slot/createTimeSlotResponse.dto';
import { CreateTimeSlotUseCase } from '@domain/time-slot/usecase/createTimeSlot.useCase';
import { FindAllTimeSlotsResponseDto } from '@presentation/dtos/time-slot/findAllTimeSlotsResponse.dto';
import { ProfileRequestDto } from '@presentation/dtos/auth/profileRequest.dto';

@Controller('time-slot')
export class TimeSlotController {
  constructor(
    private findAllTimeSlotByUserIdUseCase: FindAllTimeSlotByUserIdUseCase,
    private createTimeSlotUseCase: CreateTimeSlotUseCase,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(
    @Request() req: { user: ProfileRequestDto },
  ): Promise<FindAllTimeSlotsResponseDto[]> {
    return await this.findAllTimeSlotByUserIdUseCase.execute(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() timSlot: CreateTimeSlotRequestDto,
  ): Promise<CreateTimeSlotResponseDto> {
    return await this.createTimeSlotUseCase.execute(timSlot);
  }
}
