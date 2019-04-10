import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.less']
})
export class SchedulesComponent implements OnInit {
  currentYear = "Spring 2019";
  fallEighteen = 'Fall 2018';
  springSeventeen = "Spring 2017";
  twentySixteen = "Fall 2016";
  springEighteen = 'Spring 2018'

  constructor() { }

  ngOnInit() {
  }

}
