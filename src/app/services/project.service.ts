import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    private projects: Project[] = [
        {
            id: 'P-2023-001',
            title: 'Website Redesign',
            clientName: 'Acme Corp',
            startDate: new Date('2023-11-01'),
            endDate: new Date('2024-01-15'),
            status: 'In Progress',
            budget: 5000,
            completionPercentage: 35,
            description: 'Complete overhaul of corporate website with new branding.'
        },
        {
            id: 'P-2023-002',
            title: 'Internal CRM System',
            clientName: 'TechStart',
            startDate: new Date('2023-09-01'),
            status: 'On Hold',
            budget: 15000,
            completionPercentage: 60,
            description: 'Custom CRM for managing internal sales pipeline.'
        },
        {
            id: 'P-2023-003',
            title: 'Marketing Campaign Assets',
            clientName: 'MediaHive',
            startDate: new Date('2023-10-01'),
            endDate: new Date('2023-10-30'),
            status: 'Completed',
            budget: 3000,
            completionPercentage: 100,
            description: 'Social media graphics and video ads.'
        }
    ];

    constructor() { }

    getProjects(): Observable<Project[]> {
        return of(this.projects);
    }

    getProjectById(id: string): Observable<Project | undefined> {
        return of(this.projects.find(p => p.id === id));
    }
}
