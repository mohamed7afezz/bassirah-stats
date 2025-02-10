import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalePriceIndexComponent } from './wholesale-price-index.component';

describe('WholesalePriceIndexComponent', () => {
  let component: WholesalePriceIndexComponent;
  let fixture: ComponentFixture<WholesalePriceIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WholesalePriceIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WholesalePriceIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
