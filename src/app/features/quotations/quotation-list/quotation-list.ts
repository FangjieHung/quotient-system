import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuotationService } from '../../../services/quotation.service';
import { Quotation } from '../../../models/quotation.model';

@Component({
  selector: 'app-quotation-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quotation-list.html',
  styleUrl: './quotation-list.css',
})
export class QuotationList implements OnInit {
  quotations: Quotation[] = [];

  constructor(private quotationService: QuotationService) { }

  ngOnInit(): void {
    this.quotationService.getQuotations().subscribe(data => {
      this.quotations = data;
    });
  }
}
