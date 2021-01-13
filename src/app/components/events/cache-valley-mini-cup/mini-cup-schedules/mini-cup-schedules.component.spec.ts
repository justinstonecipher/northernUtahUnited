import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MiniCupSchedulesComponent } from './mini-cup-schedules.component';

describe('MiniCupSchedulesComponent', () => {
  let component: MiniCupSchedulesComponent;
  let fixture: ComponentFixture<MiniCupSchedulesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniCupSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCupSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
