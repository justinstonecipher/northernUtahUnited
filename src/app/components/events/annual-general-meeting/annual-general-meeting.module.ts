import { NgModule } from '@angular/core';

import { AnnualGeneralMeetingComponent }   from './annual-general-meeting.component';
import { routing } from './annual-general-meeting.routing';

@NgModule({
  imports: [routing],
  declarations: [AnnualGeneralMeetingComponent]
})
export class AnnualGeneralMeetingModule {}