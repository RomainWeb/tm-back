export class UserEntity {
  private _id: number;
  private _name: string;
  private _email: string;
  private _displayName: string;

  constructor(name: string, email: string, displayName: string, id?: number) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._displayName = displayName;
  }
}
