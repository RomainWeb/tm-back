import { AuthGuard as AuthGuardPassport } from '@nestjs/passport';
import { ExecutionContext } from '@nestjs/common';

export class JwtAuthGuard extends AuthGuardPassport('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
}
