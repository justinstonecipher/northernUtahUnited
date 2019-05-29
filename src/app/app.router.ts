import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component'
import { TryoutGuideComponent } from './components/tryout-guide/tryout-guide.component';

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
    loadChildren:'./components/about/about.module#AboutModule'
  },
    {
    path: 'events',
    loadChildren:'./components/events/events.module#EventsModule'
  },
  {
    path: 'resources',
    loadChildren:'./components/resources/resources.module#ResourcesModule'
  },
  {
    path: 'competitionLeague',
    loadChildren:'./components/leagues/competition-league/competition-league.module#CompetitionLeagueModule'
  },
  {
    path: 'uysaStateCompetition',
    loadChildren:'./components/leagues/uysa-state-competition/uysa-state-competition.module#UysaStateCompetitionModule',
  },
  {
    path: 'academySoccer',
    loadChildren:'./components/leagues/academy-soccer/academy-soccer.module#AcademySoccerModule',
  },
  {
    path: 'destinationSoccer',
    loadChildren:'./components/leagues/destination-soccer/destination-soccer.module#DestinationSoccerModule',
  },
  {
    path: 'highSchoolPrep',
    loadChildren:'./components/leagues/high-school-prep/high-school-prep.module#HighSchoolPrepModule',
  },
  {
    path: 'recreation',
    loadChildren: './components/recreation/recreation.module#RecreationModule'
  },
  {
    path: 'contact',
    loadChildren: './components/contact/contact.module#ContactModule'
  },
  {
    path: 'registration',
    loadChildren: './components/recreation/registration/registration.module#RegistrationModule'
  },
  {
    path: 'faq',
    loadChildren: './components/faq/faq.module#FaqModule'
  },
  {
    path: 'leagues',
    loadChildren: './components/leagues/leagues/leagues.module#LeaguesModule'
  },
  {
    path: 'tryoutGuide',
    component: TryoutGuideComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
