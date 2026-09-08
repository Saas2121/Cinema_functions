import { RoomEntity } from "src/rooms/entities/room.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "screenings" })
export declare class ScreeningEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: "varchar" })
    movieTitle: string;
    @Column({ type: "timestamp" })
    startsAt: Date;
    @Column({ type: "enum", enum: ["schedule", "cancelled"], default: "schedule" })
    status: "schedule" | "cancelled";
    @ManyToOne(() => RoomEntity, (room) => room.screenings)
    room: RoomEntity;
}