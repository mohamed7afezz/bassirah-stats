import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportsIndicesComponent } from './exports-indices.component';

describe('ExportsIndicesComponent', () => {
  let component: ExportsIndicesComponent;
  let fixture: ComponentFixture<ExportsIndicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportsIndicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportsIndicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
