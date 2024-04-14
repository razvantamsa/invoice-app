import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
// import { UserRequestDto } from 'src/common/user-request.dto';

@Injectable()
export class PaginationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('here');

    const { page = 1, limit = 10 } = req.query;

    req.query.page = String(parseInt(page as any));
    req.query.limit = String(parseInt(limit as any));

    next();
  }
}
