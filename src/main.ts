import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import * as $ from 'jquery';

if (environment.production) {
  enableProdMode();
}

$(document).on('click','#main-navbar-collapse-collapse.in',function(e) {
  if( $(e.target).is('a:not(".dropdown-toggle")') ) {
      $(this).collapse('hide');
  }
});

platformBrowserDynamic().bootstrapModule(AppModule);
