import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaguesComponent } from './leagues.component';
import { LeaguesModule } from './leagues.module';

const routes: Routes = [
    {
        path: '',
        component: LeaguesComponent,
    }
]

export const routing: ModuleWithProviders<LeaguesModule> = RouterModule.forChild(routes);