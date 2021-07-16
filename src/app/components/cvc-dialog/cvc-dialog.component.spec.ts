import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvcDialogComponent } from './cvc-dialog.component';

describe('CvcDialogComponent', () => {
  let component: CvcDialogComponent;
  let fixture: ComponentFixture<CvcDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvcDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvcDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
