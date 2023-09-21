export abstract class BcryptPort {
  abstract hash(hashString: string): Promise<string>;
  abstract compare(password: string, hashPassword: string): Promise<boolean>;
}
