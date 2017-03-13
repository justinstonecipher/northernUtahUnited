import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uysa-schedule',
  templateUrl: './uysa-schedule.component.html',
  styleUrls: ['./uysa-schedule.component.less']
})
export class UysaScheduleComponent implements OnInit {
  currentYear = "Spring 2017";
  twentySixteen = "Fall 2016";

  constructor() { }

  ngOnInit() {
  }

}
