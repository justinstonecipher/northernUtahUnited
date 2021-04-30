import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recreation',
  templateUrl: './recreation.component.html',
  styleUrls: ['./recreation.component.less']
})
export class RecreationComponent implements OnInit {
  currentYear = "Spring 2021";
  constructor() { }

  ngOnInit() {
  }

}
