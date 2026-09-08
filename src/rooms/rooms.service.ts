import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomEntity } from './entities/room.entity';
import { CreateRoomDto } from './dto/create-room.dto';
 
@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(RoomEntity)
    private readonly roomsRepository: Repository<RoomEntity>,
  ) {}
 
  async create(createRoomDto: CreateRoomDto): Promise<RoomEntity> {
    const existingRoom = await this.roomsRepository.findOne({
      where: { name: createRoomDto.name },
    });
 
    if (existingRoom) {
      throw new ConflictException(
        `A room with the name "${createRoomDto.name}" already exists`,
      );
    }
 
    const room = this.roomsRepository.create(createRoomDto);
    return this.roomsRepository.save(room);
  }
 
  async findById(id: number): Promise<RoomEntity | null> {
    return this.roomsRepository.findOne({ where: { id } });
  }
}

 
