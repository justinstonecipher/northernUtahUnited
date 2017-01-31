import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UysaStateCompetitionComponent } from './uysa-state-competition.component';
import { UysaScheduleComponent } from '../uysa-state-competition/uysa-schedule/uysa-schedule.component';
import { UysaRegistrationInfoComponent } from '../uysa-state-competition/uysa-registration-info/uysa-registration-info.component';
import { UysaLeagueResultsComponent } from '../uysa-state-competition/uysa-league-results/uysa-league-results.component';
import { UysaTryoutInfoComponent } from '../uysa-state-competition/uysa-tryout-info/uysa-tryout-info.component';
import { UysaTryoutAdFormComponent } from '../uysa-state-competition/uysa-tryout-ad-form/uysa-tryout-ad-form.component';

const routes: Routes = [
  { path: '', 
  component: UysaStateCompetitionComponent,
  children: [
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
 }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);