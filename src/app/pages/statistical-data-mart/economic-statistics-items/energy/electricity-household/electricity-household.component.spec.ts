import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityHouseholdComponent } from './electricity-household.component';

describe('ElectricityHouseholdComponent', () => {
  let component: ElectricityHouseholdComponent;
  let fixture: ComponentFixture<ElectricityHouseholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricityHouseholdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricityHouseholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
