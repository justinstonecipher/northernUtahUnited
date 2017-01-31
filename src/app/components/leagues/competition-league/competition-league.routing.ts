import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompetitionLeagueComponent } from './competition-league.component';
import { SchedulesComponent } from '../competition-league/schedules/schedules.component';
import { RegistrationInfoComponent } from '../competition-league/registration-info/registration-info.component';
import { LeagueResultsComponent } from '../competition-league/league-results/league-results.component';
import { TryoutInfoComponent } from '../competition-league/tryout-info/tryout-info.component';
import { TryoutAdFormComponent } from '../competition-league/tryout-ad-form/tryout-ad-form.component';

const routes: Routes = [
    {
        path: '',
        component: CompetitionLeagueComponent,
        children: [
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
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);