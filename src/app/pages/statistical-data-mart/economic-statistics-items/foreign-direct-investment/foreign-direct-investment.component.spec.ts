import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignDirectInvestmentComponent } from './foreign-direct-investment.component';

describe('ForeignDirectInvestmentComponent', () => {
  let component: ForeignDirectInvestmentComponent;
  let fixture: ComponentFixture<ForeignDirectInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForeignDirectInvestmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeignDirectInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
