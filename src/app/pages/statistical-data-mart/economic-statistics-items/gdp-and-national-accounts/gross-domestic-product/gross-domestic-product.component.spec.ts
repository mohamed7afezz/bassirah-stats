import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossDomesticProductComponent } from './gross-domestic-product.component';

describe('GrossDomesticProductComponent', () => {
  let component: GrossDomesticProductComponent;
  let fixture: ComponentFixture<GrossDomesticProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrossDomesticProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrossDomesticProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
