import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelUsageHouseholdsComponent } from './fuel-usage-households.component';

describe('FuelUsageHouseholdsComponent', () => {
  let component: FuelUsageHouseholdsComponent;
  let fixture: ComponentFixture<FuelUsageHouseholdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuelUsageHouseholdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelUsageHouseholdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
