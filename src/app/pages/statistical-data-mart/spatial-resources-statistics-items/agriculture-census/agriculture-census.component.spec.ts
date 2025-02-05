import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgricultureCensusComponent } from './agriculture-census.component';

describe('AgricultureCensusComponent', () => {
  let component: AgricultureCensusComponent;
  let fixture: ComponentFixture<AgricultureCensusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgricultureCensusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgricultureCensusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
