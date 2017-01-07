import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { EventsComponent } from './components/events/events.component';
import { RecreationComponent } from './components/recreation/recreation.component';
import { ContactComponent } from './components/contact/contact.component';
import { CompetitionLeagueComponent } from './components/leagues/competition-league/competition-league.component';
import { UysaStateCompetitionComponent } from './components/leagues/uysa-state-competition/uysa-state-competition.component';
import { ResourcesSideBarComponent } from './components/sideBars/resources-side-bar/resources-side-bar.component';
import { EventsSideBarComponent } from './components/sideBars/events-side-bar/events-side-bar.component';
import { RegistrationComponent } from './components/recreation/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ResourcesComponent,
    EventsComponent,
    RecreationComponent,
    ContactComponent,
    CompetitionLeagueComponent,
    UysaStateCompetitionComponent,
    ResourcesSideBarComponent,
    EventsSideBarComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
