import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCreateUserDto } from './dto/AuthCreateUserDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  
  @Post()
  create(@Body() authCreateUserDto: AuthCreateUserDto) {
    return this.authService.create(authCreateUserDto);
  }

  @Get(':telegram_id')
  findOne(@Param('telegram_id') telegram_id: number) {
    return this.authService.findOne(+telegram_id)
  }
}
