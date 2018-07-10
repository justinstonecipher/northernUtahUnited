import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionLeagueComponent } from './competition-league.component';
import { SchedulesComponent } from '../competition-league/schedules/schedules.component';
import { RegistrationInfoComponent } from '../competition-league/registration-info/registration-info.component';
import { LeagueResultsComponent } from '../competition-league/league-results/league-results.component';
import { TryoutInfoComponent } from '../competition-league/tryout-info/tryout-info.component';
import { TryoutAdFormComponent } from '../competition-league/tryout-ad-form/tryout-ad-form.component';
import { CompetitionSideBarComponent } from '../../sideBars/competition-side-bar/competition-side-bar.component';

import { routing } from './competition-league.routing';

@NgModule({
    imports: [
        routing,
        CommonModule,
    ],
    declarations: [
        CompetitionLeagueComponent,
        SchedulesComponent,
        RegistrationInfoComponent,
        LeagueResultsComponent,
        TryoutInfoComponent,
        TryoutAdFormComponent,
        CompetitionSideBarComponent
    ]
})
export class CompetitionLeagueModule { }