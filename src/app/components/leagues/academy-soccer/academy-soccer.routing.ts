import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcademySoccerComponent } from './academy-soccer.component';
import { AcademySoccerModule } from './academy-soccer.module';

const routes: Routes = [
    {
        path: '',
        component: AcademySoccerComponent,
    }
]

export const routing: ModuleWithProviders<AcademySoccerModule> = RouterModule.forChild(routes);