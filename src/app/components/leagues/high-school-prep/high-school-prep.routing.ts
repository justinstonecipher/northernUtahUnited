import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighSchoolPrepComponent } from './high-school-prep.component';

const routes: Routes = [
    {
        path: '',
        component: HighSchoolPrepComponent,
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);