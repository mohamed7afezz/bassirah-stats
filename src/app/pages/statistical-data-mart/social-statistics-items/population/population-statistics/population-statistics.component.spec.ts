import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationStatisticsComponent } from './population-statistics.component';

describe('PopulationStatisticsComponent', () => {
  let component: PopulationStatisticsComponent;
  let fixture: ComponentFixture<PopulationStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopulationStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopulationStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
