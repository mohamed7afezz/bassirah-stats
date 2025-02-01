import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsStatisticsComponent } from './dashboards-statistics.component';

describe('DashboardsStatisticsComponent', () => {
  let component: DashboardsStatisticsComponent;
  let fixture: ComponentFixture<DashboardsStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardsStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
