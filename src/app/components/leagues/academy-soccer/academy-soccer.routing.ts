import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcademySoccerComponent } from './academy-soccer.component';

const routes: Routes = [
    {
        path: '',
        component: AcademySoccerComponent,
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);