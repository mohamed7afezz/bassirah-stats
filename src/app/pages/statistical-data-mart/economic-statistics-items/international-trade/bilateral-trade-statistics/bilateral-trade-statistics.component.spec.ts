import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilateralTradeStatisticsComponent } from './bilateral-trade-statistics.component';

describe('BilateralTradeStatisticsComponent', () => {
  let component: BilateralTradeStatisticsComponent;
  let fixture: ComponentFixture<BilateralTradeStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BilateralTradeStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilateralTradeStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
