import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaqComponent } from './faq.component';
import { FaqModule } from './faq.module';

const routes: Routes = [
  { path: '', component: FaqComponent }
];

export const routing: ModuleWithProviders<FaqModule> = RouterModule.forChild(routes);