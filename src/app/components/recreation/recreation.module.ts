import { NgModule } from '@angular/core';

import { RecreationComponent }   from './recreation.component';
import { routing } from './recreation.routing';

@NgModule({
  imports: [routing],
  declarations: [RecreationComponent]
})
export class RecreationModule {}