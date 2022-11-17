import { Module } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { UserModule } from './user/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';
import { HttpModule } from '@nestjs/axios';
import { GamesModule } from './games/games.module';

@Module({
  imports: [
    HttpModule,
    AuthModule,
    UserModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => configService.typeOrmConfig,
      inject: [ConfigService],
    }),
    GamesModule,
  ],
})
export class AppModule {}
