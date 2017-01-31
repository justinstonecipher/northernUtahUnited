import { NgModule } from '@angular/core';

import { FaqComponent }   from './faq.component';
import { routing } from './faq.routing';

@NgModule({
  imports: [routing],
  declarations: [FaqComponent]
})
export class FaqModule {}