import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourcesComponent } from './resources.component';
import { DownloadsComponent } from '../resources/downloads/downloads.component';
import { CoachesComponent } from '../resources/coaches/coaches.component';
import { PlayersComponent } from '../resources/players/players.component';
import { ParentsComponent } from '../resources/parents/parents.component';
import { GearComponent } from '../resources/gear/gear.component';
import { FundraisingComponent } from '../resources/fundraising/fundraising.component';
import { ArticlesComponent } from '../resources/articles/articles.component';
import { RefereesComponent } from '../resources/referees/referees.component';
import { ChoosingLeaguesComponent } from '../resources/choosing-leagues/choosing-leagues.component';
import { HandballComponent } from '../resources/handball/handball.component';
import { LocalTeamsComponent } from '../resources/local-teams/local-teams.component';
import { RslLoganFacilityComponent } from '../resources/rsl-logan-facility/rsl-logan-facility.component';
import { TeachPrinciplesComponent } from '../resources/teach-principles/teach-principles.component';
import { TotalFootballComponent } from '../resources/total-football/total-football.component';
import { UysaChangesComponent } from '../resources/uysa-changes/uysa-changes.component';

const routes: Routes = [
    {
        path: '',
        component: ResourcesComponent,
        children: [
            {
                path: 'downloads',
                component: DownloadsComponent
            },
            {
                path: 'coaches',
                component: CoachesComponent
            },
            {
                path: 'players',
                component: PlayersComponent
            },
            {
                path: 'parents',
                component: ParentsComponent
            },
            {
                path: 'gear',
                component: GearComponent
            },
            {
                path: 'fundraising',
                component: FundraisingComponent
            },
            {
                path: 'articles',
                component: ArticlesComponent,
            },
            {
                path: 'referees',
                component: RefereesComponent
            },
            {
                path: 'choosingLeagues',
                component: ChoosingLeaguesComponent
            },
            {
                path: 'handball',
                component: HandballComponent
            },
            {
                path: 'localTeams',
                component: LocalTeamsComponent
            },
            {
                path: 'rslLoganFacility',
                component: RslLoganFacilityComponent
            },
            {
                path: 'teachPrinciples',
                component: TeachPrinciplesComponent
            },
            {
                path: 'totalFootball',
                component: TotalFootballComponent
            },
            {
                path: 'uysaChanges',
                component: UysaChangesComponent
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);