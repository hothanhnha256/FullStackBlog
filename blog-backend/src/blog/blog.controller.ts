import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { JwtGuard } from 'src/auth/guard';
import { AuthenticatedRequest } from './blog.service';
import { UsersService } from 'src/users/users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @UseGuards(JwtGuard)
  @Post()
  async create(
    @Body() createBlogDto: CreateBlogDto,
    @Req() req: AuthenticatedRequest,
  ) {
    console.log(req.user);
    return this.blogService.create(createBlogDto, req);
  }

  @UseGuards(JwtGuard)
  @Get('my-blogs')
  async findAll(@Req() req) {
    console.log(req);
    const userID = req.user.id;

    return await this.blogService.findMine(userID);
  }

  @Get()
  findAllPublic() {
    return this.blogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogService.findOne(+id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogService.update(+id, updateBlogDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogService.remove(+id);
  }
}
