import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestinationSoccerComponent } from './destination-soccer.component';

const routes: Routes = [
    {
        path: '',
        component: DestinationSoccerComponent,
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);