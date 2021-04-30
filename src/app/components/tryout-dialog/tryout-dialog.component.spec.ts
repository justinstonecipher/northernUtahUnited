import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryoutDialogComponent } from './tryout-dialog.component';

describe('TryoutDialogComponent', () => {
  let component: TryoutDialogComponent;
  let fixture: ComponentFixture<TryoutDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryoutDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TryoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
