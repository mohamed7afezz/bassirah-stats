import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indicator360Component } from './indicator360.component';

describe('Indicator360Component', () => {
  let component: Indicator360Component;
  let fixture: ComponentFixture<Indicator360Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indicator360Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Indicator360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
