
import { distinctUntilChanged } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog } from '@angular/material/dialog';
// import { TryoutDialogComponent } from './components/tryout-dialog/tryout-dialog.component';
import { CvcDialogComponent } from './components/cvc-dialog/cvc-dialog.component';


declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  // cookiesSetOnSite = 'NUUAllowCookies';
  // userAllowsCookies: boolean = false;
  // showTryoutDialog = 'ShowTryoutDialog';
  // showTryoutDialogBool: boolean = true;
  showCvcDialog = 'ShowCvcDialog';
  showCvcDialogBool: boolean = true;

  constructor(public router: Router, private cookieService: CookieService, public dialog: MatDialog) { }

  ngOnInit() {
    this.findCookieValue();
    // popup logic when we need it...
    // if (this.showCvcDialog) {
    //   this.openCvcDialog();
    // }
    // if(this.showTryoutDialogBool) {
    //   this.openTryoutDialog();
    // }

    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    this.router.events.pipe(distinctUntilChanged((previous: any, current: any) => {
      // Subscribe to any `NavigationEnd` events where the url has changed
      if (current instanceof NavigationEnd) {
        return previous.url === current.url;
      }
      return true;
    })).subscribe((x: any) => {
      gtag('config', 'UA-139916517-1', { 'page_path': x.url });
    });
  }

  findCookieValue(): void {
    const showDialogForUser = this.cookieService.get(this.showCvcDialog);
    if (showDialogForUser !== null && showDialogForUser !== undefined && showDialogForUser !== "") {
      this.showCvcDialog = JSON.parse(showDialogForUser);
    }
  }

  // openTryoutDialog() {
  //   this.dialog.open(TryoutDialogComponent);
  // }

  // openCvcDialog() {
  //   if (!window.location.href.includes('cacheValleyCup')) {
  //     this.dialog.open(
  //       CvcDialogComponent,
  //       {
  //         autoFocus: false
  //       }
  //     );
  //   }

  // }
}




