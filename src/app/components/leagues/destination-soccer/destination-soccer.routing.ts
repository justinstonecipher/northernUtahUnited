import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestinationSoccerComponent } from './destination-soccer.component';
import { DestinationSoccerModule } from './destination-soccer.module';

const routes: Routes = [
    {
        path: '',
        component: DestinationSoccerComponent,
    }
]

export const routing: ModuleWithProviders<DestinationSoccerModule> = RouterModule.forChild(routes);