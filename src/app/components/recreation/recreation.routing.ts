import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecreationComponent } from './recreation.component';
import { RecreationModule } from './recreation.module';

const routes: Routes = [
  { path: '', component: RecreationComponent }
];

export const routing: ModuleWithProviders<RecreationModule> = RouterModule.forChild(routes);