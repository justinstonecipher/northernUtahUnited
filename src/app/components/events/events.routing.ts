import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events.component';
import { UpcomingEventsComponent } from '../events/upcoming-events/upcoming-events.component';
import { SoccerExpoComponent } from '../events/soccer-expo/soccer-expo.component';
import { MiniCupSchedulesComponent } from './cache-valley-mini-cup/mini-cup-schedules/mini-cup-schedules.component';

const routes: Routes = [
    {
        path: '',
        component: EventsComponent,
        children: [
            {
                path: 'cacheValleyCup',
                loadChildren: '../events/cache-valley-cup/cache-valley-cup.module#CacheValleyCupModule'
            },
            {
                path: 'upcomingEvents',
                component: UpcomingEventsComponent
            },
            {
                path: 'cacheValleyMiniCup',
                loadChildren: '../events/cache-valley-mini-cup/cache-valley-mini-cup.module#CacheValleyMiniCupModule'
            },
            {
                path: 'CvcSoccerExpo',
                component: SoccerExpoComponent
            },
            {
                path: 'annualGeneralMeeting',
                loadChildren: '../events/annual-general-meeting/annual-general-meeting.module#AnnualGeneralMeetingModule'
            }
        ]
    }];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);