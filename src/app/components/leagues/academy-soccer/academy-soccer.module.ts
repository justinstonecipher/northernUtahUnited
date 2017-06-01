import { NgModule } from '@angular/core';
import { AcademySoccerComponent } from './academy-soccer.component';
import { routing } from './academy-soccer.routing'

@NgModule({
    imports: [routing],
    declarations: [
        AcademySoccerComponent
    ]
})
export class AcademySoccerModule { }