import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateGameTable1668668437561 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS games (
      gameId bigint(20) NOT NULL AUTO_INCREMENT  PRIMARY KEY,
      title varchar(100) NOT NULL,
      platform varchar(100) NOT NULL,
        score DECIMAL(19, 4) NOT NULL,
        genre varchar(100) NOT NULL,
        editors_choice varchar(100) NOT NULL)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "games"`);
  }
}
