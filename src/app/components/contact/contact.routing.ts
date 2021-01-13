import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';
import { ContactModule } from './contact.module';

const routes: Routes = [
  { path: '', component: ContactComponent }
];

export const routing: ModuleWithProviders<ContactModule> = RouterModule.forChild(routes);