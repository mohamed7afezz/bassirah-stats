import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalDataMartComponent } from './statistical-data-mart.component';

describe('StatisticalDataMartComponent', () => {
  let component: StatisticalDataMartComponent;
  let fixture: ComponentFixture<StatisticalDataMartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticalDataMartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticalDataMartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
