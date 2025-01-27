import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowModuleComponent } from './workflow-module.component';

describe('WorkflowModuleComponent', () => {
  let component: WorkflowModuleComponent;
  let fixture: ComponentFixture<WorkflowModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkflowModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
