import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academy-soccer',
  templateUrl: './academy-soccer.component.html',
  styleUrls: ['./academy-soccer.component.less']
})
export class AcademySoccerComponent implements OnInit {
  currentYear = "Fall 2017";
  constructor() { }

  ngOnInit() {
  }

}
