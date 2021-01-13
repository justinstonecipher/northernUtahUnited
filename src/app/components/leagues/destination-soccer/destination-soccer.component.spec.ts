import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DestinationSoccerComponent } from './destination-soccer.component';

describe('DestinationSoccerComponent', () => {
  let component: DestinationSoccerComponent;
  let fixture: ComponentFixture<DestinationSoccerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationSoccerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationSoccerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
