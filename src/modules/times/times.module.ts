import { Module } from '@nestjs/common';
import { TimesService } from './times.service';
import { TimesController } from './times.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimesEntity } from '../../database/time.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TimesEntity])],
  providers: [TimesService],
  controllers: [TimesController],
})
export class TimeModule {}
