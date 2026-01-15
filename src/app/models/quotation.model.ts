export interface Quotation {
    id: string;
    clientName: string;
    projectTitle: string;
    date: Date;
    status: 'Draft' | 'Sent' | 'Accepted' | 'Rejected';
    amount: number;
    items: QuotationItem[];
}

export interface QuotationItem {
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
}
