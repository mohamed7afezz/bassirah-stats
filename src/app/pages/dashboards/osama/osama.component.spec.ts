import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsamaComponent } from './osama.component';

describe('OsamaComponent', () => {
  let component: OsamaComponent;
  let fixture: ComponentFixture<OsamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsamaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
