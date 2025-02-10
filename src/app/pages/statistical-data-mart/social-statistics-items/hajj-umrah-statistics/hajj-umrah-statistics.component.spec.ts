import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HajjUmrahStatisticsComponent } from './hajj-umrah-statistics.component';

describe('HajjUmrahStatisticsComponent', () => {
  let component: HajjUmrahStatisticsComponent;
  let fixture: ComponentFixture<HajjUmrahStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HajjUmrahStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HajjUmrahStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
