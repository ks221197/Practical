import {
  HttpStatus,
  BadRequestException,
  UnauthorizedException,
  Controller,
  Post,
  Body,
  HttpException,
  Get,
  UseGuards,
  Param,
  Headers,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { LoginDto } from 'src/auth/dto/auth.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { CreateUserDto } from './dto/users.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@ApiResponse({ status: HttpStatus.OK })
@ApiResponse({ status: HttpStatus.BAD_REQUEST, type: BadRequestException })
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: UnauthorizedException })
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  create(@Body() userData: CreateUserDto) {
    try {
      console.log('createController');
      return this.usersService.createUser(userData);
    } catch (error) {
      console.log('createController:Error');
      throw new HttpException(
        error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR,
        error.message ? error.message : error,
      );
    }
  }

  @Post('login')
  login(@Body() loginData: LoginDto) {
    try {
      console.log('loginController');
      return this.authService.login(loginData);
    } catch (error) {
      console.log('loginController:Error');
      throw new HttpException(
        error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR,
        error.message ? error.message : error,
      );
    }
  }

  @Get('me')
  findMe(@Headers() userData) {
    try {
      console.log('findMeController');
      return this.usersService.findUser(+userData.userId);
    } catch (error) {
      console.log('findMeController:Error');
      throw new HttpException(
        error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR,
        error.message ? error.message : error,
      );
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') userId: string) {
    try {
      console.log('findOneController');
      return this.usersService.findUser(+userId);
    } catch (error) {
      console.log('findOneController:Error');
      throw new HttpException(
        error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR,
        error.message ? error.message : error,
      );
    }
  }
}
