import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cvc-dialog',
  templateUrl: './cvc-dialog.component.html',
  styleUrls: ['./cvc-dialog.component.css']
})
export class CvcDialogComponent implements OnInit {
  showCvcDialog = 'ShowCvcDialog';
  constructor(public cookieService: CookieService, public dialogRef: MatDialogRef<CvcDialogComponent>) { }

  ngOnInit(): void {
  }

  navigateAndClose() {
    this.dialogRef.close();
    window.location.href = '#/events/cacheValleyCup';
  }

  setDontShowDialog() {
    this.cookieService.set(this.showCvcDialog, 'false', {expires: 30, sameSite: 'Strict'});
    this.dialogRef.close();
  }

}
