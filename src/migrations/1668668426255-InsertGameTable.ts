import { GameEntity } from 'src/games/entities/game.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
import data from './seed';

export class InsertGameTable1668668426255 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const game = queryRunner.connection.getRepository(GameEntity);
    data.forEach(async (element) => {
      await game.save(element);
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('down');
  }
}
