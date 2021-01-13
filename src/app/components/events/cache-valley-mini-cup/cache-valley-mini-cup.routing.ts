import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CacheValleyCupModule } from '../cache-valley-cup/cache-valley-cup.module';

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

export const routing: ModuleWithProviders<CacheValleyCupModule> = RouterModule.forChild(routes);