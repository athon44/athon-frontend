import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsNearbyComponent } from './events-nearby.component';

describe('EventsNearbyComponent', () => {
  let component: EventsNearbyComponent;
  let fixture: ComponentFixture<EventsNearbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsNearbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsNearbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
