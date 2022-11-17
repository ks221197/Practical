import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1667797928020 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS users (
      userId bigint(20) NOT NULL AUTO_INCREMENT  PRIMARY KEY,
      firstName varchar(100) NOT NULL,
        lastName varchar(100) NOT NULL,
        email varchar(100) NOT NULL,
        password varchar(100) NOT NULL,
        createdAt TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
