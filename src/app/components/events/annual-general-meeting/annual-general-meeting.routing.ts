import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnualGeneralMeetingComponent } from './annual-general-meeting.component';
import { AnnualGeneralMeetingModule } from './annual-general-meeting.module';

const routes: Routes = [
  { path: '', component: AnnualGeneralMeetingComponent }
];

export const routing: ModuleWithProviders<AnnualGeneralMeetingModule> = RouterModule.forChild(routes);