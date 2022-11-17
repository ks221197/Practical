import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export class ConfigService {
  get typeOrmConfig(): TypeOrmModuleOptions {
    const migrations = [__dirname + '/../migrations/*{.ts,.js}'];
    const entities = [__dirname + '/../**/*.entity{.ts,.js}'];
    return {
      entities,
      migrations,
      keepConnectionAlive: true,
      type: 'mysql',
      synchronize: false,
      migrationsRun: false,
      logging: true,
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: '171122-task',
    };
  }
}
