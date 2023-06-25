import { config } from 'dotenv';

config();

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsEntity } from "./reports/entities/reports.entity";
import { JwtModule } from "@nestjs/jwt";
import {ReportsService} from "./reports/reports.service";
import {ReportsController} from "./reports/reports.controller";
import {User} from "./users/entities/users.entity";
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    TypeOrmModule.forFeature([ReportsEntity, User]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' }
    })],
  controllers: [ReportsController, UsersController],
  providers: [ReportsService, UsersService]
})
export class AppModule {}