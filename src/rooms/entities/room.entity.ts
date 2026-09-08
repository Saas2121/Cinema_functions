import { ScreeningEntity } from "src/screenings/entities/screening.entity";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"; 

@Entity({ name: "rooms" })
export declare class RoomEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column( { type: "varchar", unique: true} )
    name: string;
    @Column( { type: "int" } )
    capacity: number;
    @OneToMany(() => ScreeningEntity, (screening) => screening.room)
    screenings: ScreeningEntity[];
}