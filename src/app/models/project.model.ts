export interface Project {
    id: string;
    title: string;
    clientName: string;
    startDate: Date;
    endDate?: Date;
    status: 'In Progress' | 'Completed' | 'On Hold' | 'Cancelled';
    budget: number;
    completionPercentage: number;
    description?: string;
}
