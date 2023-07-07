import { Module } from '@nestjs/common';
import { MorpherServiceController } from './morpher-service.controller';
import { MorpherServiceService } from './morpher-service.service';
import { morpherService } from './morpher-service.model';
import { SequelizeModule } from '@nestjs/sequelize';


@Module({
  controllers: [MorpherServiceController],
  providers: [MorpherServiceService],
  imports: [SequelizeModule.forFeature([morpherService])]
})
export class MorpherServiceModule { }
