import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialProductionIndexComponent } from './industrial-production-index.component';

describe('IndustrialProductionIndexComponent', () => {
  let component: IndustrialProductionIndexComponent;
  let fixture: ComponentFixture<IndustrialProductionIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrialProductionIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrialProductionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
