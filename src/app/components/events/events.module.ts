import { NgModule } from '@angular/core';

import { EventsComponent }   from './events.component';
import { UpcomingEventsComponent } from '../events/upcoming-events/upcoming-events.component';
import { SoccerExpoComponent } from '../events/soccer-expo/soccer-expo.component';
import { EventsSideBarComponent } from '../sideBars/events-side-bar/events-side-bar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { routing } from './events.routing';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  imports: [
    routing,
    MatButtonModule,
    MatListModule,
    CommonModule,
    MatGridListModule,
  ],
  declarations: [
      EventsComponent, 
      UpcomingEventsComponent,
      SoccerExpoComponent,
      EventsSideBarComponent
      ]
})
export class EventsModule {}