import { NgModule } from '@angular/core';

import { MiniCupSchedulesComponent } from './mini-cup-schedules/mini-cup-schedules.component';
import { routing } from './cache-valley-mini-cup.routing';
import { CacheValleyMiniCupComponent } from './cache-valley-mini-cup.component';

@NgModule({
    imports: [routing],
    declarations: [
      MiniCupSchedulesComponent,
      CacheValleyMiniCupComponent
    ]
})
export class CacheValleyMiniCupModule { }