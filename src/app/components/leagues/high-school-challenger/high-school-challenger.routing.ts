import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HighSchoolChallengerComponent } from "./high-school-challenger.component"
import { HighSchoolChallengerModule } from './high-school-challenger.module';


const routes: Routes = [
    {
        path: '',
        component: HighSchoolChallengerComponent,
    }
]

export const routing: ModuleWithProviders<HighSchoolChallengerModule> = RouterModule.forChild(routes);