import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTermBusinessDtatisticsComponent } from './short-term-business-dtatistics.component';

describe('ShortTermBusinessDtatisticsComponent', () => {
  let component: ShortTermBusinessDtatisticsComponent;
  let fixture: ComponentFixture<ShortTermBusinessDtatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortTermBusinessDtatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortTermBusinessDtatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
