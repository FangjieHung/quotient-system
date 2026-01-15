import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quotation } from '../models/quotation.model';

@Injectable({
    providedIn: 'root'
})
export class QuotationService {

    private quotations: Quotation[] = [
        {
            id: 'Q-2023-001',
            clientName: 'Acme Corp',
            projectTitle: 'Website Redesign',
            date: new Date('2023-10-15'),
            status: 'Sent',
            amount: 5000,
            items: [
                { description: 'Design Phase', quantity: 1, unitPrice: 2000, total: 2000 },
                { description: 'Development', quantity: 1, unitPrice: 3000, total: 3000 }
            ]
        },
        {
            id: 'Q-2023-002',
            clientName: 'Globex Inc',
            projectTitle: 'Mobile App MVP',
            date: new Date('2023-10-20'),
            status: 'Draft',
            amount: 12000,
            items: []
        },
        {
            id: 'Q-2023-003',
            clientName: 'Soylent Corp',
            projectTitle: 'Data Analysis Dashboard',
            date: new Date('2023-10-22'),
            status: 'Accepted',
            amount: 8500,
            items: []
        }
    ];

    constructor() { }

    getQuotations(): Observable<Quotation[]> {
        return of(this.quotations);
    }

    getQuotationById(id: string): Observable<Quotation | undefined> {
        return of(this.quotations.find(q => q.id === id));
    }

    addQuotation(quotation: Quotation): void {
        this.quotations.push(quotation);
    }
}
