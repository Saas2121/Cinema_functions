import { RoomEntity } from "./room.entity";
export declare class ScreeningEntity {
    id: number;
    movieTitle: string;
    startsAt: Date;
    status: "schedule" | "cancelled";
    room: RoomEntity;
}