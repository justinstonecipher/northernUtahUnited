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
import { RegistrationComponent } from './components/recreation/registration/registration.component'

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'events', component: EventsComponent },
    { path: 'competitionLeague', component: CompetitionLeagueComponent },
    { path: 'uysaStateCompetition', component: UysaStateCompetitionComponent },
    { path: 'recreation', component: RecreationComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'registration', component: RegistrationComponent },
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
