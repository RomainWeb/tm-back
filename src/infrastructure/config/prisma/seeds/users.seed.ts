import { UserDataEntity } from '@infrastructure/data/user/entities/userData.entity';

export const UsersListSeed: UserDataEntity[] = [
  {
    email: 'yann@gmail.com',
    display_name: 'yann pseudo',
    name: 'Yann name',
    password: '123456',
    created_at: new Date(
      'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)',
    ),
    deleted_at: null,
    updated_at: null,
  },
  {
    email: 'romain@gmail.com',
    display_name: 'romain pseudo',
    name: 'romain name',
    password: '123456',
    created_at: new Date(
      'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)',
    ),
    deleted_at: null,
    updated_at: null,
  },
];
