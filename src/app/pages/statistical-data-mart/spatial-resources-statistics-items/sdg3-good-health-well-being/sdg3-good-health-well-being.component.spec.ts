import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDG3GoodHealthWellBeingComponent } from './sdg3-good-health-well-being.component';

describe('SDG3GoodHealthWellBeingComponent', () => {
  let component: SDG3GoodHealthWellBeingComponent;
  let fixture: ComponentFixture<SDG3GoodHealthWellBeingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SDG3GoodHealthWellBeingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SDG3GoodHealthWellBeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
