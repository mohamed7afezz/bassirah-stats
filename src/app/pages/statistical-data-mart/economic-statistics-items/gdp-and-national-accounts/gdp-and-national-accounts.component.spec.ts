import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GDPAndNationalAccountsComponent } from './gdp-and-national-accounts.component';

describe('GDPAndNationalAccountsComponent', () => {
  let component: GDPAndNationalAccountsComponent;
  let fixture: ComponentFixture<GDPAndNationalAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GDPAndNationalAccountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GDPAndNationalAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
