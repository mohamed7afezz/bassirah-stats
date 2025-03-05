import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowEditComponent } from './work-flow-edit.component';

describe('WorkFlowEditComponent', () => {
  let component: WorkFlowEditComponent;
  let fixture: ComponentFixture<WorkFlowEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkFlowEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkFlowEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
