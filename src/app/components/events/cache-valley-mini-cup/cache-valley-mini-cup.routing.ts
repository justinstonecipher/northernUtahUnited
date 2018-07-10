import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CacheValleyMiniCupComponent } from './cache-valley-mini-cup.component';
import { MiniCupSchedulesComponent } from './mini-cup-schedules/mini-cup-schedules.component';

const routes: Routes = [
    {
        path: '',
        component: CacheValleyMiniCupComponent,
        children: [
            {
                path: 'miniCupSchedules',
                component: MiniCupSchedulesComponent
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);