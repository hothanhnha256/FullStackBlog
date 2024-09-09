import { AuthGuard } from '@nestjs/passport';
import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export class JwtGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
