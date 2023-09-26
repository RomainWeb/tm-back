export class UserEntity {
  private id: number;
  private name: string;
  private email: string;
  private displayName: string;

  constructor(name: string, email: string, displayName: string, id?: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.displayName = displayName;
  }
}
