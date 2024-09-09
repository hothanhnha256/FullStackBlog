import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsStrongPassword } from 'class-validator';

export class UpdatePasswordUserDto {
  @IsStrongPassword()
  password: string;
}
