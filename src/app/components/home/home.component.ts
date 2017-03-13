import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  eventTitle = 'Competition and Recreation Referee Clinics';
  eventSummary = 'Navigate to the Referee page to find all the info you need!';
  eventButton = 'Learn More';
  constructor() { }

  ngOnInit() {
  }

}
