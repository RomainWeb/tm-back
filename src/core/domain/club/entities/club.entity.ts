import { SportTypeEnum } from '../../../common/enums/sportType.enum';

export class ClubEntity {
  _id?: number;
  _name: string;
  _logoUrl: string;
  _shortName: string;
  _sportType: SportTypeEnum;
  _clubCreationDate: Date;
  _emailContact: string;
  _address: string;

  constructor(
    name: string,
    logoUrl: string,
    shortName: string,
    sportType: SportTypeEnum,
    clubCreationDate: Date,
    emailContact: string,
    address: string,
    id?: number,
  ) {
    this._id = id;
    this._address = address;
    this._name = name;
    this._logoUrl = logoUrl;
    this._shortName = shortName;
    this._sportType = sportType;
    this._clubCreationDate = clubCreationDate;
    this._emailContact = emailContact;
    this._address = address;
  }
}
