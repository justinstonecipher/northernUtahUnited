import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnualGeneralMeetingComponent } from './annual-general-meeting.component';

const routes: Routes = [
  { path: '', component: AnnualGeneralMeetingComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);