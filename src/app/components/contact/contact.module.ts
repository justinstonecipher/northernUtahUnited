import { NgModule } from '@angular/core';

import { ContactComponent }   from './contact.component';
import { routing } from './contact.routing';

@NgModule({
  imports: [routing],
  declarations: [ContactComponent]
})
export class ContactModule {}