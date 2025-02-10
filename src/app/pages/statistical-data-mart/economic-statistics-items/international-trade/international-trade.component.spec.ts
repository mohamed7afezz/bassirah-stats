import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalTradeComponent } from './international-trade.component';

describe('InternationalTradeComponent', () => {
  let component: InternationalTradeComponent;
  let fixture: ComponentFixture<InternationalTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternationalTradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternationalTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
