import { NgModule } from '@angular/core';

import { RegistrationComponent }   from './registration.component';
import { routing } from './registration.routing';

@NgModule({
  imports: [routing],
  declarations: [RegistrationComponent]
})
export class RegistrationModule {}