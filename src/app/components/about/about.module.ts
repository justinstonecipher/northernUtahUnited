import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component';
import { routing } from './about.routing';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [routing, CommonModule],
    declarations: [AboutComponent],
    entryComponents: []
})
export class AboutModule {}