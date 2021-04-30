import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HighSchoolChallengerComponent } from './high-school-challenger.component';
import { routing } from './high-school-challenger.routing';

@NgModule({
    imports: [
        routing,
        MatCardModule
    ],
    declarations: [
        HighSchoolChallengerComponent
    ]
})
export class HighSchoolChallengerModule { }