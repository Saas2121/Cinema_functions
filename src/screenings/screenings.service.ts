import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScreeningEntity } from './entities/screening.entity';
import { CreateScreeningDto } from './dto/create-screening.dto';
import { UpdateScreeningDto } from './dto/update-screening.dto';
import { RoomsService } from '../rooms/rooms.service';
 
@Injectable()
export class ScreeningsService {
  constructor(
    @InjectRepository(ScreeningEntity)
    private readonly screeningsRepository: Repository<ScreeningEntity>,
    private readonly roomsService: RoomsService,
  ) {}
}