import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmrahStatisticsComponent } from './umrah-statistics.component';

describe('UmrahStatisticsComponent', () => {
  let component: UmrahStatisticsComponent;
  let fixture: ComponentFixture<UmrahStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UmrahStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmrahStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
