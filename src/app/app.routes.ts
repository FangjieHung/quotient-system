import { Routes } from '@angular/router';
import { MainLayout } from './components/layout/main-layout/main-layout';
import { QuotationList } from './features/quotations/quotation-list/quotation-list';
import { QuotationForm } from './features/quotations/quotation-form/quotation-form';
import { ProjectList } from './features/projects/project-list/project-list';
import { ProjectDetail } from './features/projects/project-detail/project-detail';
import { PaymentSlip } from './features/financials/payment-slip/payment-slip';
import { Invoice } from './features/financials/invoice/invoice';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            { path: '', redirectTo: 'quotations', pathMatch: 'full' },
            { path: 'quotations', component: QuotationList },
            { path: 'quotations/new', component: QuotationForm },
            { path: 'projects', component: ProjectList },
            { path: 'projects/:id', component: ProjectDetail },
            { path: 'financials/payment-slip', component: PaymentSlip },
            { path: 'financials/invoice', component: Invoice },
        ]
    }
];
