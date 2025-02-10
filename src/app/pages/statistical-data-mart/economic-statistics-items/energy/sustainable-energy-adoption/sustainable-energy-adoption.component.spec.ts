import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainableEnergyAdoptionComponent } from './sustainable-energy-adoption.component';

describe('SustainableEnergyAdoptionComponent', () => {
  let component: SustainableEnergyAdoptionComponent;
  let fixture: ComponentFixture<SustainableEnergyAdoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SustainableEnergyAdoptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SustainableEnergyAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
