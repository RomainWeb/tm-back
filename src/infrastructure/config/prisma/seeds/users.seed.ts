import { UserDataEntity } from '@infrastructure/data/user/entities/userData.entity';

export const UsersListSeed: UserDataEntity[] = [
  {
    id: '8e3399e6-1d94-11ec-9621-0242ac130002',
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
    id: '9371f314-1c93-11ec-9621-0242ac130002',
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
