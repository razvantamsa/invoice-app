import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class PaginationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { offset = 0, limit = 10 } = req.query;

    req.query.offset = String(parseInt(offset as any));
    req.query.limit = String(parseInt(limit as any));

    console.log(req.query);
    next();
  }
}
