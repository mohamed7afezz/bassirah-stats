import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDG4QualityEducationComponent } from './sdg4-quality-education.component';

describe('SDG4QualityEducationComponent', () => {
  let component: SDG4QualityEducationComponent;
  let fixture: ComponentFixture<SDG4QualityEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SDG4QualityEducationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SDG4QualityEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
