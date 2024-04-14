import { Injectable } from '@nestjs/common';
import { Prisma } from '../prisma';
import { User } from '@prisma/client';

@Injectable()
export class UserDAO {
  constructor(private prisma: Prisma) {}

  async findOne(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
