import { Component, OnInit } from '@angular/core';
import { s } from '@angular/core/src/render3';

@Component({
  selector: 'app-destination-soccer',
  templateUrl: './destination-soccer.component.html',
  styleUrls: ['./destination-soccer.component.less']
})
export class DestinationSoccerComponent implements OnInit {
  months: Month[] = [
    // {id: 1, month: 'January', link: 'https://uysa.affinitysoccer.com/eventmanager/public/event.asp?calid=10339263'},
    // { id: 2, month: 'February', link: 'https://uysa.affinitysoccer.com/eventmanager/public/event.asp?calid=10339300' },
    // { id: 3, month: 'March', link: 'https://uysa.affinitysoccer.com/eventmanager/public/event.asp?calid=10339291' },
    // { id: 4, month: 'April', link: 'https://uysa.affinitysoccer.com/eventmanager/public/event.asp?calid=10543340' },
    { id: 6, month: 'June', link: 'https://uysa.affinitysoccer.com/eventmanager/public/event.asp?calid=10668469' },
  ];

  sessionDates: SessionDates[] = [
    // {
    //   monthId: 1,
    //   overViewDates: 'Mondays Jan 7 - 28',
    //   dates: 'January 7, 14, 23, & 28 (Wednesday to make up for MLK holiday',
    //   sessionTimes: 'AM Session: 10:00-11:00 AM'
    // },
    // {
    //   monthId: 1,
    //   overViewDates: 'Tuesdays Jan 8 - 29',
    //   dates: 'January 8, 15, 22, & 29',
    //   sessionTimes: 
    //     'AM Session: 10:00-11:00 AM <br/> PM Session: 1:30-2:30 PM'
    // },
    // {
    //   monthId: 1,
    //   overViewDates: 'Wednesdays Jan 9 - 30',
    //   dates: 'January 9, 16, 23, & 30',
    //   sessionTimes: 'PM Session: 1:30-2:30 PM'
    // },
    // {
    //   monthId: 2,
    //   overViewDates: 'Mondays Feb 4 - 25',
    //   dates: 'February 4, 11, 20, & 25 Wednesday to make up for Presidents Day',
    //   sessionTimes: 'AM Session: 10:00-11:00 AM'
    // },
    // {
    //   monthId: 2,
    //   overViewDates: 'Tuesdays Feb 8 - 29',
    //   dates: 'February 5, 12, 19, & 26',
    //   sessionTimes: 
    //     'AM Session: 10:00-11:00 AM'
    // },
    // {
    //   monthId: 3,
    //   overViewDates: 'Mondays March 4 - 25',
    //   dates: 'March 4, 11, 18, & 25',
    //   sessionTimes: 'AM Session: 10:00-11:00 AM'
    // },
    // {
    //   monthId: 3,
    //   overViewDates: 'Tuesdays March 5 - 26',
    //   dates: 'March 5, 12, 19, & 26',
    //   sessionTimes:
    //     'AM Session: 10:00-11:00 AM <br/> PM Session: 1:30-2:30 PM'
    // },
    // {
    //   monthId: 3,
    //   overViewDates: 'Wednesdays March 6 - 27',
    //   dates: 'March 6, 13, 20, & 27',
    //   sessionTimes: 'PM Session: 1:30-2:30 PM'
    // },
    // {
    //   monthId: 3,
    //   overViewDates: 'Sundays March 10 - 31',
    //   dates: 'March 10, 17, 24, 31',
    //   sessionTimes: 'PM Session: 5:00 – 6:00 PM'
    // },
    // {
    //   monthId: 4,
    //   overViewDates: 'Mondays April 15 - May 6',
    //   dates: 'April  15, 22, 29, May 6',
    //   sessionTimes: '10:00 - 11:00 AM <br/> 1:00 - 2:00 PM'
    // },
    // {
    //   monthId: 4,
    //   overViewDates: 'Tuesdays April 16 - May 7',
    //   dates: 'April 16, 23, 30, May 7',
    //   sessionTimes: '10:00 - 11:00 AM <br/> 1:00 - 2:00 PM'
    // },
    // {
    //   monthId: 4,
    //   overViewDates: 'Wednesdays April 17 - May 8',
    //   dates: 'April 17, 24, May 1, & May 8',
    //   sessionTimes: '5:00 - 6:00 PM'
    // },
    // {
    //   monthId: 4,
    //   overViewDates: 'Sundays April 14 - May 12',
    //   dates: 'April 14, 28, May 5, & May 12',
    //   sessionTimes: '5:00 - 6:00 PM'
    // },
    {
      monthId: 6,
      overViewDates: 'Tuesdays June 4 - 25',
      dates: 'June 4, 11, 18, 25',
      sessionTimes: '10:00 - 11:00 AM <br/> 1:00 - 2:00 PM'
    },
    {
      monthId: 6,
      overViewDates: 'Wednesdays June 5 - 26',
      dates: 'June 5, 12, 19, 26',
      sessionTimes: '5:00 - 6:00 PM'
    },
    {
      monthId: 6,
      overViewDates: 'Sundays June 2 - 30 (Spanish & English)',
      dates: 'June 2, 8, 16, 23, 30',
      sessionTimes: '5:00 - 6:00 PM'
    },
  ];

  games: Games[] = [
    // {
    //   monthId: 1,
    //   gameDays: 'January 11, 18, 25, February 1',
    //   gameTime: 'Fridays 10:30-11:30 AM',
    // },
    // {
    //   monthId: 1,
    //   gameDays: 'January 11, 18, 25, February 1',
    //   gameTime: 'Fridays 1:00-2:00 PM'
    // },
    // {
    //   monthId: 2,
    //   gameDays: 'February 8, 15, 22, 29',
    //   gameTime: 'Fridays 10:30-11:30 AM',
    // },
    // {
    //   monthId: 3,
    //   gameDays: 'March 8, 13, 20, 27',
    //   gameTime: 'Fridays 10:30-11:30 AM',
    // },
    // {
    //   monthId: 3,
    //   gameDays: 'March 8, 13, 20, 27',
    //   gameTime: 'Fridays 1:00-2:00 PM'
    // },
    // {
    //   monthId: 4,
    //   gameDays: 'April 19, 26, May 3, & May 10 ONLY at Real Salt Lake Soccer Facility',
    //   gameTime: 'Fridays 10:00 - 11:00 AM',
    // },
    // {
    //   monthId: 4,
    //   gameDays: 'April 20, 27, May 4, & May 11 ONLY at Real Salt Lake Soccer Facility',
    //   gameTime: 'Saturdays 1:00 - 2:00 PM'
    // },
    {
      monthId: 6,
      gameDays: 'June 1, 8, 15, 22, 29',
      gameTime: 'Saturdays 9:00 - 10:00 AM'
    }
  ];

  sessionData: SessionData[] = [
    // { 
    //   id: 1,
    //   month: 'January Session (2019)',
    //   sessionDates: this.sessionDates.filter(sd => sd.monthId === 1),
    //   games: this.games.filter(g => g.monthId === 1)
    // },
    // { 
    //   id: 2,
    //   month: 'February Session (2019)',
    //   sessionDates: this.sessionDates.filter(sd => sd.monthId === 2),
    //   games: this.games.filter(g => g.monthId === 2)
    // },
    // {
    //   id: 3,
    //   month: 'March Session (2019)',
    //   sessionDates: this.sessionDates.filter(sd => sd.monthId === 3),
    //   games: this.games.filter(g => g.monthId === 3)
    // },
    // {
    //   id: 4,
    //   month: 'April Session (2019)',
    //   sessionDates: this.sessionDates.filter(sd => sd.monthId === 4),
    //   games: this.games.filter(g => g.monthId === 4)
    // },
    {
      id: 6,
      month: 'June Session (2019)',
      sessionDates: this.sessionDates.filter(sd => sd.monthId === 6),
      games: this.games.filter(g => g.monthId === 6)
    }
  ];

  location: Locations = {
    monthId: 4,
    city: 'Nibley City April Session',
    address: '2980 South 1200 west',
    sessionsDates: [
      {
        monthId: 4,
        overViewDates: 'Mondays April 15 - May 6',
        dates: 'April 15, 22, 29, & May 6',
        sessionTimes: '9:30 - 10:30 AM',
      },
      {
        monthId: 4,
        overViewDates: 'Tuesdays April 16 - May 7',
        dates: 'April 16, 23, 30, & May 7',
        sessionTimes: '9:30 - 10:30 AM',
      }
    ]
  };

  constructor() { }
  ngOnInit() {
  }
}
export interface Month {
  id: number;
  month: string;
  link: string;
}

export interface SessionData {
  //id is the months number
  id: number;
  month: string;
  sessionDates: SessionDates[];
  games: Games[];
}

export interface SessionDates {
  //id is the months number
  monthId: number;
  overViewDates: string;
  dates: string;
  sessionTimes: string;
}

export interface Games {
  //id is the months number
  monthId: number;
  gameTime: string;
  gameDays: string;
}

export interface Locations {
  //id is the months number
  monthId: number;
  city: string;
  address: string;
  //sessionDateId
  sessionsDates: NibleySessionDates[];
}

export interface NibleySessionDates {
  //id is the months number
  monthId: number;
  overViewDates: string;
  dates: string;
  sessionTimes: string;
}