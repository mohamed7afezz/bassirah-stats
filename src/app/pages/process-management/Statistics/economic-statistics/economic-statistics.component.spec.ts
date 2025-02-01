import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicStatisticsComponent } from './economic-statistics.component';

describe('EconomicStatisticsComponent', () => {
  let component: EconomicStatisticsComponent;
  let fixture: ComponentFixture<EconomicStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EconomicStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomicStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
