import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDG6CleanWaterSanitationComponent } from './sdg6-clean-water-sanitation.component';

describe('SDG6CleanWaterSanitationComponent', () => {
  let component: SDG6CleanWaterSanitationComponent;
  let fixture: ComponentFixture<SDG6CleanWaterSanitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SDG6CleanWaterSanitationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SDG6CleanWaterSanitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
