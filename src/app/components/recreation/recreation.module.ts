import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { RecreationComponent }   from './recreation.component';
import { routing } from './recreation.routing';

@NgModule({
  imports: [
    routing,
    MatButtonModule,
  ],
  declarations: [RecreationComponent]
})
export class RecreationModule {}