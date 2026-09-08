export class UpdateScreeningDto {
    movieTitle?: string;
    startsAt?: Date;
    status?: "schedule" | "cancelled";
}
