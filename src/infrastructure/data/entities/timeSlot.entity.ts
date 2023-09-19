import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TimeSlotStatusEnum } from '../../../core/common/enums/timeSlotsStatus.enum';

@Entity()
export class TimeSlotEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'date' })
  startDate: string;

  @Column({ type: 'date' })
  endDate: string;

  @Column('varchar', { length: 255, nullable: false })
  description: string;

  @Column({ type: 'int' })
  status: TimeSlotStatusEnum;
}
