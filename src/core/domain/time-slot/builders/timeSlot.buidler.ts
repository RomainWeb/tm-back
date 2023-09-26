import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';
import { TimeSlotStatusEnum } from '../../../common/enums/timeSlotsStatus.enum';

export class TimeSlotBuilder {
  private _id!: string;
  private _name: string;
  private _startDate!: Date;
  private _endDate!: Date;
  private _description!: string;
  private _status!: TimeSlotStatusEnum;
  private _userId: string;

  withId(value: string): TimeSlotBuilder {
    this._id = value;
    return this;
  }

  withStartDate(value: Date): TimeSlotBuilder {
    this._startDate = value;
    return this;
  }

  withEndDate(value: Date): TimeSlotBuilder {
    this._endDate = value;
    return this;
  }

  withDescription(value: string): TimeSlotBuilder {
    this._description = value;
    return this;
  }

  withStatus(value: TimeSlotStatusEnum): TimeSlotBuilder {
    this._status = value;
    return this;
  }

  withName(value: string): TimeSlotBuilder {
    this._name = value;
    return this;
  }

  withUserId(value: string): TimeSlotBuilder {
    this._userId = value;
    return this;
  }

  get id(): string {
    return this._id;
  }

  get startDate(): Date {
    return this._startDate;
  }

  get endDate(): Date {
    return this._endDate;
  }

  get description(): string {
    return this._description;
  }

  get status(): TimeSlotStatusEnum {
    return this._status;
  }

  get name(): string {
    return this._name;
  }

  get userId(): string {
    return this._userId;
  }

  build(): TimeSlotEntity {
    return new TimeSlotEntity(this);
  }
}
