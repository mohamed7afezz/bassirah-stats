import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HajjStatisticsComponent } from './hajj-statistics.component';

describe('HajjStatisticsComponent', () => {
  let component: HajjStatisticsComponent;
  let fixture: ComponentFixture<HajjStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HajjStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HajjStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
