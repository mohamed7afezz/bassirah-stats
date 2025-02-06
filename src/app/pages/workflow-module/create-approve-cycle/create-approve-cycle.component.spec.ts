import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateApproveCycleComponent } from './create-approve-cycle.component';

describe('CreateApproveCycleComponent', () => {
  let component: CreateApproveCycleComponent;
  let fixture: ComponentFixture<CreateApproveCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateApproveCycleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateApproveCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
