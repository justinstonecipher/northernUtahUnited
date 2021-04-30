import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {enableProdMode} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { FormsModule } from '@angular/forms';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TryoutGuideComponent } from './components/tryout-guide/tryout-guide.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { TryoutDialogComponent } from './components/tryout-dialog/tryout-dialog.component';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    TryoutGuideComponent,
    TryoutDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
