import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighSchoolPrepComponent } from './high-school-prep.component';
import { HighSchoolPrepModule } from './high-school-prep.module';

const routes: Routes = [
    {
        path: '',
        component: HighSchoolPrepComponent,
    }
]

export const routing: ModuleWithProviders<HighSchoolPrepModule> = RouterModule.forChild(routes);