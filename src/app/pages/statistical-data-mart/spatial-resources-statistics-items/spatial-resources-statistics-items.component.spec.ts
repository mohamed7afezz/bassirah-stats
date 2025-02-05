import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpatialResourcesStatisticsItemsComponent } from './spatial-resources-statistics-items.component';

describe('SpatialResourcesStatisticsItemsComponent', () => {
  let component: SpatialResourcesStatisticsItemsComponent;
  let fixture: ComponentFixture<SpatialResourcesStatisticsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpatialResourcesStatisticsItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpatialResourcesStatisticsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
