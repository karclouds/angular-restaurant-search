import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailViewComponent } from './restaurant-detail-view.component';

describe('RestaurantDetailViewComponent', () => {
  let component: RestaurantDetailViewComponent;
  let fixture: ComponentFixture<RestaurantDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
