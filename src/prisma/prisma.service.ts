import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://yauni:1234578@localhost:5432/nest_tutorial?schema=public',
        },
      },
    });
  }
}
