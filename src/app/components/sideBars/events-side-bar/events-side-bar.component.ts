import { Component, OnInit } from '@angular/core';
import { EventsComponent } from '../../events/events.component';
import { CacheValleyCupComponent } from '../../events/cache-valley-cup/cache-valley-cup.component'

@Component({
  selector: 'app-events-side-bar',
  templateUrl: './events-side-bar.component.html',
  styleUrls: ['./events-side-bar.component.less']
})
export class EventsSideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
