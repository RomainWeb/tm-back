export abstract class JwtPort {
  abstract validate(payload: any): any;
}
