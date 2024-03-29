import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {enableProdMode} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TryoutGuideComponent } from './components/tryout-guide/tryout-guide.component';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    TryoutGuideComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
