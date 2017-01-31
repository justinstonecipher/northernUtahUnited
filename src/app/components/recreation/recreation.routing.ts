import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecreationComponent } from './recreation.component';

const routes: Routes = [
  { path: '', component: RecreationComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);