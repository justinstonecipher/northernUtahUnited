import { NgModule } from '@angular/core';

import { EventsComponent }   from './events.component';
import { UpcomingEventsComponent } from '../events/upcoming-events/upcoming-events.component';
import { SoccerExpoComponent } from '../events/soccer-expo/soccer-expo.component';
import { EventsSideBarComponent } from '../sideBars/events-side-bar/events-side-bar.component';

import { routing } from './events.routing';


@NgModule({
  imports: [routing],
  declarations: [
      EventsComponent, 
      UpcomingEventsComponent,
      SoccerExpoComponent,
      EventsSideBarComponent
      ]
})
export class EventsModule {}