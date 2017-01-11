import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent} from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { EventsComponent } from './components/events/events.component';
import { CompetitionLeagueComponent } from './components/leagues/competition-league/competition-league.component';
import { UysaStateCompetitionComponent } from './components/leagues/uysa-state-competition/uysa-state-competition.component';
import { RecreationComponent } from './components/recreation/recreation.component';
import { ContactComponent } from './components/contact/contact.component';
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
import { SchedulesComponent } from './components/leagues/competition-league/schedules/schedules.component';
import { RegistrationInfoComponent } from './components/leagues/competition-league/registration-info/registration-info.component';
import { LeagueResultsComponent } from './components/leagues/competition-league/league-results/league-results.component';
import { TryoutInfoComponent } from './components/leagues/competition-league/tryout-info/tryout-info.component';
import { TryoutAdFormComponent } from './components/leagues/competition-league/tryout-ad-form/tryout-ad-form.component';
import { UysaScheduleComponent } from './components/leagues/uysa-state-competition/uysa-schedule/uysa-schedule.component';
import { UysaRegistrationInfoComponent } from './components/leagues/uysa-state-competition/uysa-registration-info/uysa-registration-info.component';
import { UysaLeagueResultsComponent } from './components/leagues/uysa-state-competition/uysa-league-results/uysa-league-results.component';
import { UysaTryoutInfoComponent } from './components/leagues/uysa-state-competition/uysa-tryout-info/uysa-tryout-info.component';
import { UysaTryoutAdFormComponent } from './components/leagues/uysa-state-competition/uysa-tryout-ad-form/uysa-tryout-ad-form.component';
import { FaqComponent } from './components/faq/faq.component';

export const router: Routes = [
    { 
      path: '', 
      redirectTo: 'home', 
      pathMatch: 'full' 
    },
    { 
      path: 'home', 
      component: HomeComponent 
    },
    {
      path: 'about', 
      component: AboutComponent 
    },
    { 
      path: 'resources', 
      component: ResourcesComponent,
      children: [
        {
          path: '',
        redirectTo: 'resources',
        pathMatch: 'full'
        },
        {
          path: 'downloads',
          component: DownloadsComponent
        },
        {
          path: 'coaches',
          component: CoachesComponent
        },
        {
          path: 'players',
          component: PlayersComponent
        },
        {
          path: 'parents',
          component: ParentsComponent
        },
        {
          path: 'gear',
          component: GearComponent
        },
        {
          path: 'fundraising',
          component: FundraisingComponent
        },
        {
          path: 'articles',
          component: ArticlesComponent
        },
        {
          path: 'referees',
          component: RefereesComponent
        }
      ] 
    },
    { 
      path: 'events', 
      component: EventsComponent,
      children: [
        {
          path: '',
          redirectTo: 'events',
          pathMatch: 'full'
        },
        {
          path: 'cacheValleyCup',
          component: CacheValleyCupComponent
        },
        {
          path: 'upcomingEvents',
          component: UpcomingEventsComponent
        },
        {
          path: 'cacheValleyMiniCup',
          component: CacheValleyMiniCupComponent
        }, 
        {
          path: 'CvcSoccerExpo',
          component: SoccerExpoComponent
        }, 
        {
          path: 'annualGeneralMeeting',
          component: AnnualGeneralMeetingComponent
        } 
      ] 
    },
    { 
      path: 'competitionLeague', 
      component: CompetitionLeagueComponent,
      children: [
        {
          path: '',
          redirectTo: 'competitionLeague',
          pathMatch: 'full'
        },
        {
          path: 'challengerSchedule',
          component: SchedulesComponent
        },
        {
          path: 'RegistrationInfo',
          component: RegistrationInfoComponent
        },
        {
          path: 'LeagueResults',
          component: LeagueResultsComponent
        },
        {
          path: 'TryoutInfo',
          component: TryoutInfoComponent
        },
        {
          path: 'TryoutAdForm',
          component: TryoutAdFormComponent
        }
      ]
    },
    { 
      path: 'uysaStateCompetition', 
      component: UysaStateCompetitionComponent,
      children: [
        {
          path: '',
          redirectTo: 'uysaStateCompetition',
          pathMatch: 'full'
        },
        {
          path: 'uysaSchedule',
          component: UysaScheduleComponent
        },
        {
          path: 'uysaRegistrationInfo',
          component: UysaRegistrationInfoComponent
        },
        {
          path: 'uysaLeagueResults',
          component: UysaLeagueResultsComponent
        },
        {
          path: 'uysaTryoutInfo',
          component: UysaTryoutInfoComponent
        },
        {
          path: 'uysaTryoutAdForm',
          component: UysaTryoutAdFormComponent
        }
      ] 
    },
    { 
      path: 'recreation', 
      component: RecreationComponent 
    },
    { 
      path: 'contact', 
      component: ContactComponent 
    },
    { 
      path: 'registration', 
      component: RegistrationComponent 
    },
    { 
      path: 'faq', 
      component: FaqComponent 
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
