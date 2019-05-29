import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  eventTitle = 'RSL Camp Coming to North Logan!';
  eventSummary = 'The event will take place June 26-29. <a href="www.rslcamps.com">Register Here</a>';
  eventButton = 'Learn More';
  DestinationSoccerStartDate = 'June 1st';
  constructor() {
   }

  ngOnInit() {
  }
}
