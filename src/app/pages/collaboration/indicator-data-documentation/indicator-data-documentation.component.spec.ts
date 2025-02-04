import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorDataDocumentationComponent } from './indicator-data-documentation.component';

describe('IndicatorDataDocumentationComponent', () => {
  let component: IndicatorDataDocumentationComponent;
  let fixture: ComponentFixture<IndicatorDataDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicatorDataDocumentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicatorDataDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
