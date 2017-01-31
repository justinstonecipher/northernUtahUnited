import { NgModule } from '@angular/core';

import { UysaStateCompetitionComponent } from './uysa-state-competition.component';
import { UysaScheduleComponent } from '../uysa-state-competition/uysa-schedule/uysa-schedule.component';
import { UysaRegistrationInfoComponent } from '../uysa-state-competition/uysa-registration-info/uysa-registration-info.component';
import { UysaLeagueResultsComponent } from '../uysa-state-competition/uysa-league-results/uysa-league-results.component';
import { UysaTryoutInfoComponent } from '../uysa-state-competition/uysa-tryout-info/uysa-tryout-info.component';
import { UysaTryoutAdFormComponent } from '../uysa-state-competition/uysa-tryout-ad-form/uysa-tryout-ad-form.component';
import { UysaSideBarComponent } from '../../sideBars/uysa-side-bar/uysa-side-bar.component';

import { routing } from './uysa-state-competition.routing';

@NgModule({
    imports: [routing],
    declarations: [
        UysaStateCompetitionComponent,
        UysaScheduleComponent,
        UysaRegistrationInfoComponent,
        UysaLeagueResultsComponent,
        UysaTryoutInfoComponent,
        UysaTryoutAdFormComponent,
        UysaSideBarComponent
    ]
})
export class UysaStateCompetitionModule { }