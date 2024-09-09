import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from './dto/auth.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import Redis from 'ioredis';
@Injectable()
export class AuthService {
  // private redisClient: Redis;
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {
    // this.redisClient = new Redis({
    //   host: this.configService.get('REDIS_HOST'),
    //   port: this.configService.get('REDIS_PORT'),
    // });
  }
  async login(authDto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: authDto.email,
      },
    });
    if (!user) {
      throw new Error('User not found');
    }
    if (!(await argon.verify(user.password, authDto.password))) {
      throw new Error('Incorrect password');
    }
    return {
      access_token: await this.jwtService.signAsync({
        sub: user.id,
        email: user.email,
      }),
    };
  }

  async signinAdmin(authDto: AuthDto) {
    const admin = await this.prisma.admin.findUnique({
      where: {
        email: authDto.email,
      },
    });
    if (!admin) {
      throw new Error('Admin not found');
    }
    if (!(await argon.verify(admin.password, authDto.password))) {
      throw new Error('Incorrect password');
    }
    return {
      access_token: await this.jwtService.signAsync({
        sub: admin.id,
        email: admin.email,
      }),
    };
  }

  async signup(signupdto: CreateUserDto) {
    const checkUser = await this.prisma.user.findUnique({
      where: {
        email: signupdto.email,
      },
    });

    console.log(signupdto);
    if (checkUser) {
      return new ConflictException('User already exists');
    }
    return this.usersService.create(signupdto);
  }

  async signout() {
    return { message: 'Logged out' };
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = { sub: userId, email };
    const secret = this.configService.get('JWT_SECRET');
    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });
    return {
      access_token: token,
    };
  }
}
