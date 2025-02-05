import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialStatisticsItemsComponent } from './social-statistics-items.component';

describe('SocialStatisticsItemsComponent', () => {
  let component: SocialStatisticsItemsComponent;
  let fixture: ComponentFixture<SocialStatisticsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialStatisticsItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialStatisticsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
