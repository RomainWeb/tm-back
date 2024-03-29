import { BaseDataEntity } from '@infrastructure/data/common/entities/baseDataEntity';

export interface UserDataEntity extends BaseDataEntity {
  id?: string;
  password: string;
  email: string;
  display_name: string;
}
