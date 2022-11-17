import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpStatus,
  BadRequestException,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import HttpException from 'src/exceptions/httpException';
import { CreateGameDto, FindGameDto, UpdateGameDto } from './dto/games.dto';
import { GamesService } from './games.service';

@ApiTags('Games')
@ApiResponse({ status: HttpStatus.OK })
@ApiResponse({ status: HttpStatus.BAD_REQUEST, type: BadRequestException })
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: UnauthorizedException })
@UseGuards(JwtAuthGuard)
@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  createGame(@Body() gameData: CreateGameDto) {
    try {
      console.log('createGameController');
      return this.gamesService.createGame(gameData);
    } catch (error) {
      console.log(error, 'error', 'createGameController');
      throw new HttpException(
        error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR,
        error.message ? error.message : error,
      );
    }
  }

  @Post('search')
  findGame(@Body() filterData: FindGameDto) {
    try {
      console.log('findGameController');
      return this.gamesService.findGame(filterData);
    } catch (error) {
      console.log(error, 'error', 'findGameController');
      throw new HttpException(
        error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR,
        error.message ? error.message : error,
      );
    }
  }

  @Put(':id')
  updateGame(@Param('id') id: string, @Body() gameData: UpdateGameDto) {
    try {
      console.log('updateGameController');
      return this.gamesService.updateGame(+id, gameData);
    } catch (error) {
      console.log(error, 'error', 'updateGameController');
      throw new HttpException(
        error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR,
        error.message ? error.message : error,
      );
    }
  }

  @Delete(':id')
  deleteGame(@Param('id') id: string) {
    try {
      console.log('deleteGameController');
      return this.gamesService.deleteGame(+id);
    } catch (error) {
      console.log(error, 'error', 'deleteGameController');
      throw new HttpException(
        error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR,
        error.message ? error.message : error,
      );
    }
  }
}
