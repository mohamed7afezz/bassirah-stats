import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicStatisticsItemsComponent } from './economic-statistics-items.component';

describe('EconomicStatisticsItemsComponent', () => {
  let component: EconomicStatisticsItemsComponent;
  let fixture: ComponentFixture<EconomicStatisticsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EconomicStatisticsItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomicStatisticsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
