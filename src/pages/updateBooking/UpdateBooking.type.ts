export interface UpdateBookingType {
    booking: {
        id: number;
        title: string;
        name: string;
        startDate: Date;
        endDate: Date;
    };
}
