import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDeterminantsStatisticsComponent } from './health-determinants-statistics.component';

describe('HealthDeterminantsStatisticsComponent', () => {
  let component: HealthDeterminantsStatisticsComponent;
  let fixture: ComponentFixture<HealthDeterminantsStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthDeterminantsStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthDeterminantsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
