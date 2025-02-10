import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossNationalIncomeComponent } from './gross-national-income.component';

describe('GrossNationalIncomeComponent', () => {
  let component: GrossNationalIncomeComponent;
  let fixture: ComponentFixture<GrossNationalIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrossNationalIncomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrossNationalIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
