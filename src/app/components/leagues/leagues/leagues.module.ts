import { NgModule } from '@angular/core';

import { LeaguesComponent } from './leagues.component';

import { routing } from './leagues.routing'

@NgModule({
    imports: [routing],
    declarations: [
        LeaguesComponent
    ]
})
export class LeaguesModule { }
