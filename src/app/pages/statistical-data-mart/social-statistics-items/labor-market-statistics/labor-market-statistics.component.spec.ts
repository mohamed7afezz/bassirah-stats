import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborMarketStatisticsComponent } from './labor-market-statistics.component';

describe('LaborMarketStatisticsComponent', () => {
  let component: LaborMarketStatisticsComponent;
  let fixture: ComponentFixture<LaborMarketStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaborMarketStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaborMarketStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
