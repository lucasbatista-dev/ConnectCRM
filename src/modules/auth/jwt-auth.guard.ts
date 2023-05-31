import { ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err, user, info, context: ExecutionContext) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    const request = context.switchToHttp().getRequest();
    const userId = request.params.id;
    const userEmail = request.params.email;


    if (context.getClass().name !== 'ClientsController' && userId && user.id !== userId) {
      throw new ForbiddenException();
    }

    if (userEmail && user.email !== userEmail) {
      throw new ForbiddenException();
    }

    return user;
  }
}