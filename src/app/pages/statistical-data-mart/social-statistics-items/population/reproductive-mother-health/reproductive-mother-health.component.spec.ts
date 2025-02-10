import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproductiveMotherHealthComponent } from './reproductive-mother-health.component';

describe('ReproductiveMotherHealthComponent', () => {
  let component: ReproductiveMotherHealthComponent;
  let fixture: ComponentFixture<ReproductiveMotherHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReproductiveMotherHealthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReproductiveMotherHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
