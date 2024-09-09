import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}
  async create(createAdminDto: CreateAdminDto) {
    if (createAdminDto.email) {
      const checkAdmin = await this.prisma.admin.findUnique({
        where: {
          email: createAdminDto.email,
        },
      });
      if (checkAdmin) {
        return 'Admin already exists';
      }
    }
    if (createAdminDto.password) {
      createAdminDto.password = await argon.hash(createAdminDto.password);
    }
    return await this.prisma.admin.create({
      data: createAdminDto,
    });
  }

  async findAll() {
    return await this.prisma.admin.findMany();
  }

  async findOne(id: string) {
    const admin = await this.prisma.admin.findUnique({
      where: { id },
    });
    if (!admin) {
      return 'Admin not found';
    }
    return admin;
  }

  async update(id: string, updateAdminDto: UpdateAdminDto) {
    const adminfind = await this.prisma.admin.findUnique({
      where: { id },
    });
    if (!adminfind) {
      return null;
    }
    return await this.prisma.admin.update({
      where: { id },
      data: updateAdminDto,
    });
  }

  async remove(id: string) {
    const adminfind = await this.prisma.admin.findUnique({
      where: { id },
    });
    if (!adminfind) {
      return 'Admin not found';
    }
    return await this.prisma.admin.delete({
      where: { id },
    });
  }
}
