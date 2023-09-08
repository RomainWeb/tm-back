import { ClubEntity } from '@domain/entities/club.entity';

export const ClubList: ClubEntity[] = [
  new ClubEntity(
    'clubOne',
    'logoUrl',
    'TCV',
    0,
    new Date(),
    'test@test.com',
    '30310 vergèze',
    1,
  ),
  new ClubEntity(
    'clubTwo',
    'logoUrl',
    'TCV',
    0,
    new Date(),
    'test@test.com',
    '30310 vergèze',
    2,
  ),
  new ClubEntity(
    'clubThree',
    'logoUrl',
    'TCV',
    0,
    new Date(),
    'test@test.com',
    '30310 vergèze',
    3,
  ),
];
