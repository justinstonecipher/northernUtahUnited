import { NgModule } from '@angular/core';

import { ResourcesComponent }   from './resources.component';
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
import { ResourcesSideBarComponent } from '../sideBars/resources-side-bar/resources-side-bar.component';
import { routing } from './resources.routing';

@NgModule({
  imports: [routing],
  declarations: [
      ResourcesComponent,
      DownloadsComponent,
      CoachesComponent,
      PlayersComponent,
      ParentsComponent,
      GearComponent,
      FundraisingComponent,
      ArticlesComponent,
      RefereesComponent,
      ChoosingLeaguesComponent,
      HandballComponent,
      LocalTeamsComponent,
      RslLoganFacilityComponent,
      TeachPrinciplesComponent,
      TotalFootballComponent,
      UysaChangesComponent,
      ResourcesSideBarComponent
      ]
})
export class ResourcesModule {}