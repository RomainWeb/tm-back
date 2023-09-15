export interface IFormatExceptionMessage {
  message: string;
  code_error?: number;
}

export interface ExceptionsRepositoryPort {
  badRequestException(data: IFormatExceptionMessage): void;
  internalServerErrorException(data?: IFormatExceptionMessage): void;
  forbiddenException(data?: IFormatExceptionMessage): void;
  UnauthorizedException(data?: IFormatExceptionMessage): void;
}
