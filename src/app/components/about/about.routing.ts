import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { AboutModule } from './about.module';

const routes: Routes = [
    { path: '', component: AboutComponent }
];

export const routing: ModuleWithProviders<AboutModule> = RouterModule.forChild(routes);