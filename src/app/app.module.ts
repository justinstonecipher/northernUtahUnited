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
import { CacheValleyCupComponent } from './components/events/cache-valley-cup/cache-valley-cup.component';
import { UpcomingEventsComponent } from './components/events/upcoming-events/upcoming-events.component';
import { CacheValleyMiniCupComponent } from './components/events/cache-valley-mini-cup/cache-valley-mini-cup.component';
import { SoccerExpoComponent } from './components/events/soccer-expo/soccer-expo.component';
import { AnnualGeneralMeetingComponent } from './components/events/annual-general-meeting/annual-general-meeting.component';
import { DownloadsComponent } from './components/resources/downloads/downloads.component';
import { CoachesComponent } from './components/resources/coaches/coaches.component';
import { PlayersComponent } from './components/resources/players/players.component';
import { ParentsComponent } from './components/resources/parents/parents.component';
import { GearComponent } from './components/resources/gear/gear.component';
import { FundraisingComponent } from './components/resources/fundraising/fundraising.component';
import { ArticlesComponent } from './components/resources/articles/articles.component';
import { RefereesComponent } from './components/resources/referees/referees.component';
import { CompetitionSideBarComponent } from './components/sideBars/competition-side-bar/competition-side-bar.component';
import { SchedulesComponent } from './components/leagues/competition-league/schedules/schedules.component';
import { RegistrationInfoComponent } from './components/leagues/competition-league/registration-info/registration-info.component';
import { LeagueResultsComponent } from './components/leagues/competition-league/league-results/league-results.component';
import { TryoutInfoComponent } from './components/leagues/competition-league/tryout-info/tryout-info.component';
import { TryoutAdFormComponent } from './components/leagues/competition-league/tryout-ad-form/tryout-ad-form.component';
import { UysaSideBarComponent } from './components/sideBars/uysa-side-bar/uysa-side-bar.component';
import { UysaScheduleComponent } from './components/leagues/uysa-state-competition/uysa-schedule/uysa-schedule.component';
import { UysaRegistrationInfoComponent } from './components/leagues/uysa-state-competition/uysa-registration-info/uysa-registration-info.component';
import { UysaLeagueResultsComponent } from './components/leagues/uysa-state-competition/uysa-league-results/uysa-league-results.component';
import { UysaTryoutInfoComponent } from './components/leagues/uysa-state-competition/uysa-tryout-info/uysa-tryout-info.component';
import { UysaTryoutAdFormComponent } from './components/leagues/uysa-state-competition/uysa-tryout-ad-form/uysa-tryout-ad-form.component';
import { FaqComponent } from './components/faq/faq.component';
import { CupRegistrationComponent } from './components/events/cache-valley-cup/cup-registration/cup-registration.component';
import { CupSchedulesComponent } from './components/events/cache-valley-cup/cup-schedules/cup-schedules.component';
import { CupLocationComponent } from './components/events/cache-valley-cup/cup-location/cup-location.component';
import { CupCarnivalComponent } from './components/events/cache-valley-cup/cup-carnival/cup-carnival.component';
import { CupRulesComponent } from './components/events/cache-valley-cup/cup-rules/cup-rules.component';
import { CupDirectionsComponent } from './components/events/cache-valley-cup/cup-directions/cup-directions.component';

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
    RegistrationComponent,
    CacheValleyCupComponent,
    UpcomingEventsComponent,
    CacheValleyMiniCupComponent,
    SoccerExpoComponent,
    AnnualGeneralMeetingComponent,
    DownloadsComponent,
    CoachesComponent,
    PlayersComponent,
    ParentsComponent,
    GearComponent,
    FundraisingComponent,
    ArticlesComponent,
    RefereesComponent,
    CompetitionSideBarComponent,
    SchedulesComponent,
    RegistrationInfoComponent,
    LeagueResultsComponent,
    TryoutInfoComponent,
    TryoutAdFormComponent,
    UysaSideBarComponent,
    UysaScheduleComponent,
    UysaRegistrationInfoComponent,
    UysaLeagueResultsComponent,
    UysaTryoutInfoComponent,
    UysaTryoutAdFormComponent,
    FaqComponent,
    CupRegistrationComponent,
    CupSchedulesComponent,
    CupLocationComponent,
    CupCarnivalComponent,
    CupRulesComponent,
    CupDirectionsComponent
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
