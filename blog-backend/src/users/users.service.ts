import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { UpdatePasswordUserDto } from './dto/password-user.dto';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const checkUser = await this.prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });
    if (checkUser) {
      return 'User already exists';
    }
    const hashedPassword = await argon.hash(createUserDto.password);
    createUserDto.password = hashedPassword;
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!user) {
      return 'User not found';
    }
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const checkUser = this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!checkUser) {
      return 'User not found';
    }
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: updateUserDto,
    });
  }
  updatePassword(id: string, password: UpdatePasswordUserDto) {
    const checkUser = this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!checkUser) {
      return 'User not found';
    }
    const hashedPassword = argon.hash(password.password);
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        password: String(hashedPassword),
      },
    });
  }

  async remove(id: string) {
    const checkUser = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!checkUser) {
      return 'User not found';
    }
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }

  changepassword(id: string, password: string) {
    const checkUser = this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!checkUser) {
      return 'User not found';
    }
    const hashedPassword = argon.hash(password);
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        password: String(hashedPassword),
      },
    });
  }
}
