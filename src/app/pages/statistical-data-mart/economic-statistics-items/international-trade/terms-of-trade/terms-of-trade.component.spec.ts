import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsOfTradeComponent } from './terms-of-trade.component';

describe('TermsOfTradeComponent', () => {
  let component: TermsOfTradeComponent;
  let fixture: ComponentFixture<TermsOfTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsOfTradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsOfTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
