import { SportTypeEnum } from '@enums/sportType.enum';

export default class ClubEntity {
  id: number;
  name: string;
  logoUrl: string;
  shortName: string;
  sportType: SportTypeEnum;
  clubCreationDate: Date;
  emailContact: string;
  address: string;

  constructor(
    id: number,
    name: string,
    logoUrl: string,
    shortName: string,
    sportType: SportTypeEnum,
    clubCreationDate: Date,
    emailContact: string,
    address: string,
  ) {
    this.id = id;
    this.name = name;
    this.logoUrl = logoUrl;
    this.shortName = shortName;
    this.sportType = sportType;
    this.clubCreationDate = clubCreationDate;
    this.emailContact = emailContact;
    this.address = address;
  }
}
