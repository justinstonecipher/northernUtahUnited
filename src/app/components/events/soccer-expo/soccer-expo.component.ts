import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soccer-expo',
  templateUrl: './soccer-expo.component.html',
  styleUrls: ['./soccer-expo.component.less']
})
export class SoccerExpoComponent implements OnInit {
  location = 'Utah State University';
  startTime = '10';
  startAmPm = 'am';
  endTime = '5:30';
  endAmPm = 'pm';
  date = 'Saturday March 4th, 2017';
  constructor() { }

  ngOnInit() {
  }

}
