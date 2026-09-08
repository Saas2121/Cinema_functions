import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScreeningEntity } from './entities/screening.entity';
import { ScreeningsService } from './screenings.service';
import { ScreeningsController } from './screenings.controller';
import { RoomsModule } from '../rooms/rooms.module';
 
@Module({
  imports: [TypeOrmModule.forFeature([ScreeningEntity]), RoomsModule],
  controllers: [ScreeningsController],
  providers: [ScreeningsService],
})
export class ScreeningsModule {}
