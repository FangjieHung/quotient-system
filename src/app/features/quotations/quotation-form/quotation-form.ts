import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { QuotationService } from '../../../services/quotation.service';
import { Quotation } from '../../../models/quotation.model';

@Component({
  selector: 'app-quotation-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './quotation-form.html',
  styleUrl: './quotation-form.css',
})
export class QuotationForm {
  quotationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private quotationService: QuotationService,
    private router: Router
  ) {
    this.quotationForm = this.fb.group({
      clientName: ['', Validators.required],
      projectTitle: ['', Validators.required],
      date: [new Date().toISOString().substring(0, 10), Validators.required],
      items: this.fb.array([])
    });

    // Add initial item
    this.addItem();
  }

  get items(): FormArray {
    return this.quotationForm.get('items') as FormArray;
  }

  addItem(): void {
    const itemGroup = this.fb.group({
      description: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      unitPrice: [0, [Validators.required, Validators.min(0)]],
    });
    this.items.push(itemGroup);
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  calculateTotal(): number {
    return this.items.controls.reduce((acc, curr) => {
      const qty = curr.get('quantity')?.value || 0;
      const price = curr.get('unitPrice')?.value || 0;
      return acc + (qty * price);
    }, 0);
  }

  onSubmit(): void {
    if (this.quotationForm.valid) {
      const formValue = this.quotationForm.value;
      const newQuotation: Quotation = {
        id: `Q-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000)}`,
        clientName: formValue.clientName,
        projectTitle: formValue.projectTitle,
        date: new Date(formValue.date),
        status: 'Draft',
        amount: this.calculateTotal(),
        items: formValue.items.map((item: any) => ({
          ...item,
          total: item.quantity * item.unitPrice
        }))
      };

      this.quotationService.addQuotation(newQuotation);
      this.router.navigate(['/quotations']);
    }
  }
}
