import { ClubEntity } from '@domain/entities/club.entity';

export class UserEntity {
  private _id: number;
  private _name: string;
  private _email: string;
  private _displayName: string;
  private _club: ClubEntity;
  constructor(
    name: string,
    email: string,
    displayName: string,
    club: ClubEntity,
    id?: number,
  ) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._displayName = displayName;
    this._club = club;
  }
}
