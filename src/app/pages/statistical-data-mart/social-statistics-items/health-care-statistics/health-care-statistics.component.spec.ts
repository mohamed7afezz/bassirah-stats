import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCareStatisticsComponent } from './health-care-statistics.component';

describe('HealthCareStatisticsComponent', () => {
  let component: HealthCareStatisticsComponent;
  let fixture: ComponentFixture<HealthCareStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthCareStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthCareStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
