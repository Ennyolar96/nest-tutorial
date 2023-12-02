import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable({})
export class AuthServices {
  constructor(private prisma: PrismaService) {}

  async Register(dto: AuthDto) {
    const { email, password } = dto;
    // generate password
    const hash = await argon.hash(password);
    // save the user data
    const user = await this.prisma.user.create({
      data: {
        email,
        password: hash,
      },

      // prisma will return only was will select here
      // select: {
      //   id: true,
      //   email: true,
      //   createdAt: true,
      // },
    });

    // here will tell prisma to remove password only from the data is going to return
    delete user.password;

    // return saved user
    return user;
  }

  Login() {}
}
