import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tryout-dialog',
  templateUrl: './tryout-dialog.component.html',
  styleUrls: ['./tryout-dialog.component.css']
})
export class TryoutDialogComponent implements OnInit {
  showTryoutDialog = 'ShowTryoutDialog';
  constructor(public cookieService: CookieService, public dialogRef: MatDialogRef<TryoutDialogComponent>) { }

  ngOnInit(): void {
  }

  setDontShowDialog() {
    this.cookieService.set(this.showTryoutDialog, 'false', {expires: 60, sameSite: 'Strict'})
    this.dialogRef.close()
  }

}
