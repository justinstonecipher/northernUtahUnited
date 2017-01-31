import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  { path: '', component: RegistrationComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);