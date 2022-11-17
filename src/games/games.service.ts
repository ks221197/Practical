import { Injectable, HttpStatus } from '@nestjs/common';
import HttpException from 'src/exceptions/httpException';
import { Connection, FindConditions } from 'typeorm';
import { CreateGameDto, UpdateGameDto, FindGameDto } from './dto/games.dto';
import { GameEntity } from './entities/game.entity';

@Injectable()
export class GamesService {
  gameRepository;
  constructor(connection: Connection) {
    this.gameRepository = connection.getRepository(GameEntity);
  }

  async createGame(gameData: CreateGameDto) {
    try {
      console.log('createGameService');

      const isGameExists = await this.isExist({ title: gameData.title });
      if (isGameExists)
        throw {
          message: 'Game already exists',
        };

      const addGameObject = {
        title: gameData.title,
        platform: gameData.platform,
        score: gameData?.score ? gameData.score : 0,
        genre: gameData.genre,
        editors_choice: gameData?.editors_choice
          ? gameData.editors_choice
          : 'N',
      };

      const createdGameData = await this.gameRepository.save(addGameObject);

      if (!createdGameData)
        throw {
          message: 'no data added',
        };
      return createdGameData;
    } catch (error) {
      console.log(error, 'error', 'createGameService');
      throw new HttpException(
        HttpStatus.INTERNAL_SERVER_ERROR,
        error.message ? error.message : error,
      );
    }
  }

  async findGame(filterData: FindGameDto) {
    try {
      console.log('findGameService', filterData);

      const filterQuery = this.gameRepository.createQueryBuilder('games');
      if (filterData.platform) {
        filterQuery.where('platform like :platform', {
          platform: `%${filterData.platform}%`,
        });
      }
      if (filterData.genre) {
        filterQuery.orWhere('genre like :genre', {
          genre: `%${filterData.genre}%`,
        });
      }
      if (filterData.editors_choice) {
        filterQuery.orWhere('editors_choice like :editors_choice', {
          editors_choice: `%${filterData.editors_choice}%`,
        });
      }
      const games = await filterQuery
        .orderBy('score', filterData.order)
        .getMany();

      if (!games)
        throw {
          message: 'Game not exists',
        };

      return games;
    } catch (error) {
      console.log(error, 'error', 'findGameService');
      throw new HttpException(
        HttpStatus.INTERNAL_SERVER_ERROR,
        error.message ? error.message : error,
      );
    }
  }

  async updateGame(gameId: number, gameData: UpdateGameDto) {
    try {
      console.log('updateGameService');

      const isGameExists = await this.isExist({ gameId: gameId });
      if (!isGameExists)
        throw {
          message: 'Game not exists',
        };

      const updatedGameData = await this.gameRepository.update(
        { gameId: gameId },
        gameData,
      );

      if (updatedGameData.affected === 0)
        throw {
          message: 'no data updated',
        };
      return { updated: updatedGameData.affected };
    } catch (error) {
      console.log(error, 'error', 'updateGameService');
      throw new HttpException(
        HttpStatus.INTERNAL_SERVER_ERROR,
        error.message ? error.message : error,
      );
    }
  }

  async deleteGame(gameId: number) {
    try {
      console.log('deleteGameService');

      const deletedGameData = await this.gameRepository.delete({
        gameId: gameId,
      });
      if (deletedGameData.affected === 0)
        throw {
          message: 'no data deleted',
        };
      return { deleted: deletedGameData.affected };
    } catch (error) {
      console.log(error, 'error', 'deleteGameService');
      throw new HttpException(
        HttpStatus.INTERNAL_SERVER_ERROR,
        error.message ? error.message : error,
      );
    }
  }

  async isExist<T>(findData: FindConditions<T>): Promise<boolean> {
    try {
      console.log('isExists');

      const queryResponse = await this.gameRepository.findOne(findData);
      if (queryResponse) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error, 'error', 'isExists');
      throw new HttpException(HttpStatus.NOT_FOUND, error);
    }
  }
}
