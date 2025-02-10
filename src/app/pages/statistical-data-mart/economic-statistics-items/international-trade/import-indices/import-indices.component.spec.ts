import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportIndicesComponent } from './import-indices.component';

describe('ImportIndicesComponent', () => {
  let component: ImportIndicesComponent;
  let fixture: ComponentFixture<ImportIndicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportIndicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportIndicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
