import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { enableProdMode } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { FormsModule } from '@angular/forms';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TryoutGuideComponent } from './components/tryout-guide/tryout-guide.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TryoutDialogComponent } from './components/tryout-dialog/tryout-dialog.component';
import { CvcDialogComponent } from './components/cvc-dialog/cvc-dialog.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
// import { 
//   MatToolbarModule,
//   MatButtonModule,
//   MatMenuModule,
//   MatCardModule,
//   MatIconModule,
//   MatListModule,
//   MatGridListModule,
//   MatDividerModule,
//   MatDialogModule,
// } from '@angular/material';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    TryoutGuideComponent,
    TryoutDialogComponent,
    CvcDialogComponent,
    FooterComponent,
    TopNavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
