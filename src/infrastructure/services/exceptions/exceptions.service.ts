import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ExceptionsRepositoryPort,
  IFormatExceptionMessage,
} from '@application/ports/exceptions/exceptionsRepository.port';

@Injectable()
export class ExceptionsService implements ExceptionsRepositoryPort {
  badRequestException(data: IFormatExceptionMessage): void {
    throw new BadRequestException(data);
  }
  internalServerErrorException(data?: IFormatExceptionMessage): void {
    throw new InternalServerErrorException(data);
  }
  forbiddenException(data?: IFormatExceptionMessage): void {
    throw new ForbiddenException(data);
  }
  UnauthorizedException(data?: IFormatExceptionMessage): void {
    throw new UnauthorizedException(data);
  }
}
