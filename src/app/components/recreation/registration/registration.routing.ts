import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration.component';
import { RegistrationModule } from './registration.module';

const routes: Routes = [
  { path: '', component: RegistrationComponent }
];

export const routing: ModuleWithProviders<RegistrationModule> = RouterModule.forChild(routes);