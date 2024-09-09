import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UsersService } from 'src/users/users.service';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma/prisma.service';

export interface AuthenticatedRequest extends Request {
  user: any;
}

@Injectable()
export class BlogService {
  constructor(private prismaService: PrismaService) {}
  async create(createBlogDto: CreateBlogDto, req: AuthenticatedRequest) {
    const user = await req.user;
    console.log('this is user');
    console.log(user);
    if (!user) {
      throw new UnauthorizedException('User not authenticated');
    }

    const blog = await this.prismaService.post.findMany({
      where: {
        title: createBlogDto.title.toString(),
      },
    });

    if (blog.length > 0) {
      throw new Error('Blog already exists');
    }

    return await this.prismaService.post.create({
      data: {
        title: createBlogDto.title,
        content: createBlogDto.content,
        author: { connect: { id: user.id } },
      },
    });
  }

  findAll() {
    return `This action returns all blog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blog`;
  }

  async findMine(userID: string) {
    const response = await this.prismaService.post.findMany({
      where: {
        authorId: userID,
      },
    });
    console.log(response);
    if (!response) {
      return [];
    }
    return response;
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
