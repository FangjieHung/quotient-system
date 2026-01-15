import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSlip } from './payment-slip';

describe('PaymentSlip', () => {
  let component: PaymentSlip;
  let fixture: ComponentFixture<PaymentSlip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentSlip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentSlip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
