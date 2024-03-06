export class UserEntity {
  constructor(
    readonly name: string,
    readonly email: string,
    readonly displayName: string,
    readonly id: number,
  ) {}
}
