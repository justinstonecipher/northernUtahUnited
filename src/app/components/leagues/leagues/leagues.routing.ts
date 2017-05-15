import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaguesComponent } from './leagues.component';

const routes: Routes = [
    {
        path: '',
        component: LeaguesComponent,
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);