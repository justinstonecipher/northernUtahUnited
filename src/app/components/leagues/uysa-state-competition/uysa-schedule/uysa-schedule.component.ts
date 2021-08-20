import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uysa-schedule',
  templateUrl: './uysa-schedule.component.html',
  styleUrls: ['./uysa-schedule.component.less']
})
export class UysaScheduleComponent implements OnInit {
  currentYear = "Fall 2021";
  fallNineteen = "Fall 2019";
  springNineteen = 'Spring 2019';
  springSeventeen = "Spring 2017";
  twentySixteen = "Fall 2016";
  fallSeventeen = 'Fall 2017';
  xLeague: string;
  premierLeague: string;
  errorMessage: string;
  title: string;

  constructor() { }

  ngOnInit() {
  }

  setModalData(gender: string) {
    if (gender.includes('girls')) {
      this.title = this.currentYear + ' Girls Schedules';
      this.xLeague = 'https://uysa.affinitysoccer.com/tour/public/info/accepted_list.asp?sessionguid=&tournamentguid=3DDA48FF-4D8C-4756-A12B-8114B754250E&show=girls';
      this.premierLeague = 'https://uysa.affinitysoccer.com/tour/public/info/accepted_list.asp?sessionguid=&tournamentguid=927D7E83-9331-4E34-9D42-971DAEFE5389&show=girls';
    } else if (gender.includes('boys')) {
      this.title = this.currentYear + ' Boys Schedules';
      this.xLeague = 'https://uysa.affinitysoccer.com/tour/public/info/accepted_list.asp?sessionguid=&tournamentguid=3DDA48FF-4D8C-4756-A12B-8114B754250E&show=boys';
      this.premierLeague = 'https://uysa.affinitysoccer.com/tour/public/info/accepted_list.asp?sessionguid=&tournamentguid=927D7E83-9331-4E34-9D42-971DAEFE5389&show=boys';
    } else {
      this.title = 'An error has occurred';
      this.errorMessage = 'There was an error on selection, please close pop up and try again.'
    }
  }

}
