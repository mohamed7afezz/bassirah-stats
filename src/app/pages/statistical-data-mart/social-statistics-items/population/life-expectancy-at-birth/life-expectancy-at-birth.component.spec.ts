import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeExpectancyAtBirthComponent } from './life-expectancy-at-birth.component';

describe('LifeExpectancyAtBirthComponent', () => {
  let component: LifeExpectancyAtBirthComponent;
  let fixture: ComponentFixture<LifeExpectancyAtBirthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeExpectancyAtBirthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeExpectancyAtBirthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
