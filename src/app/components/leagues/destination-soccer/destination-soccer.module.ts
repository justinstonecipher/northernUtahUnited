import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationSoccerComponent } from './destination-soccer.component';
import { routing } from './destination-soccer.routing';

@NgModule({
    imports: [routing, CommonModule],
    declarations: [
        DestinationSoccerComponent
    ]
})
export class DestinationSoccerModule { }