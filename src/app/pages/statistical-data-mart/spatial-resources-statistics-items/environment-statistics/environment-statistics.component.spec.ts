import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentStatisticsComponent } from './environment-statistics.component';

describe('EnvironmentStatisticsComponent', () => {
  let component: EnvironmentStatisticsComponent;
  let fixture: ComponentFixture<EnvironmentStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvironmentStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
