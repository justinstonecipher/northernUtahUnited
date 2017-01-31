import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CacheValleyCupComponent } from './cache-valley-cup.component';
import { CupRegistrationComponent } from '../cache-valley-cup/cup-registration/cup-registration.component';
import { CupSchedulesComponent } from '../cache-valley-cup/cup-schedules/cup-schedules.component';
import { CupLocationComponent } from '../cache-valley-cup/cup-location/cup-location.component';
import { CupCarnivalComponent } from '../cache-valley-cup/cup-carnival/cup-carnival.component';
import { CupRulesComponent } from '../cache-valley-cup/cup-rules/cup-rules.component';
import { CupDirectionsComponent } from '../cache-valley-cup/cup-directions/cup-directions.component';

const routes: Routes = [
    {
        path: '',
        component: CacheValleyCupComponent,
        children: [
            {
                path: 'cupRegistration',
                component: CupRegistrationComponent
            },
            {
                path: 'cupSchedules',
                component: CupSchedulesComponent
            },
            {
                path: 'cupLocation',
                component: CupLocationComponent
            },
            {
                path: 'cupCarnival',
                component: CupCarnivalComponent
            },
            {
                path: 'cupRules',
                component: CupRulesComponent
            },
            {
                path: 'cupDirections',
                component: CupDirectionsComponent
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);