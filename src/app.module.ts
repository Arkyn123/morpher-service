import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MorpherServiceModule } from './morpher-service/morpher-service.module';
import { morpherService } from './morpher-service/morpher-service.model';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'morpher-service',
    autoLoadModels: true,
    models: [morpherService]
  }),
    MorpherServiceModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
