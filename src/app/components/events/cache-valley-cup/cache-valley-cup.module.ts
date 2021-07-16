import { NgModule } from '@angular/core';

import { CacheValleyCupComponent } from './cache-valley-cup.component';
import { CupRegistrationComponent } from '../cache-valley-cup/cup-registration/cup-registration.component';
import { CupSchedulesComponent } from '../cache-valley-cup/cup-schedules/cup-schedules.component';
import { CupLocationComponent } from '../cache-valley-cup/cup-location/cup-location.component';
import { CupCarnivalComponent } from '../cache-valley-cup/cup-carnival/cup-carnival.component';
import { CupRulesComponent } from '../cache-valley-cup/cup-rules/cup-rules.component';
import { CupDirectionsComponent } from '../cache-valley-cup/cup-directions/cup-directions.component';
import { routing } from './cache-valley-cup.routing';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [routing, CommonModule],
    declarations: [
        CacheValleyCupComponent,
        CupRegistrationComponent,
        CupSchedulesComponent,
        CupLocationComponent,
        CupCarnivalComponent,
        CupRulesComponent,
        CupDirectionsComponent
    ]
})
export class CacheValleyCupModule { }