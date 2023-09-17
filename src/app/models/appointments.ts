export interface Appointments {
    id: string;
    customer: string;
    description: string;
    doctor: string;
    appointment_completed: boolean;
    startDate: Date;
    endDate: Date;
}