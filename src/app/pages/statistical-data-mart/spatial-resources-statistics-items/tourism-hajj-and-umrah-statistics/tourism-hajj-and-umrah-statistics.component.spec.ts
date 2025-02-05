import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismHajjAndUmrahStatisticsComponent } from './tourism-hajj-and-umrah-statistics.component';

describe('TourismHajjAndUmrahStatisticsComponent', () => {
  let component: TourismHajjAndUmrahStatisticsComponent;
  let fixture: ComponentFixture<TourismHajjAndUmrahStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourismHajjAndUmrahStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourismHajjAndUmrahStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
