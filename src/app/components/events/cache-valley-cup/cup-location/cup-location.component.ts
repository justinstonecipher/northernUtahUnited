import { Component, OnInit } from '@angular/core';
import { Location } from './types';

@Component({
  selector: 'app-cup-location',
  templateUrl: './cup-location.component.html',
  styleUrls: ['./cup-location.component.less']
})
export class CupLocationComponent implements OnInit {
  locations: Location[]
  constructor() { }

  ngOnInit() {
    this.setLocations();
  }

  setLocations() {
    this.locations = [
      {
        title: 'Elk Ridge Park',
        address: '1190 E 2500 N Logan, UT 84341',
        image: '/images/ElkRidge.png'
      },
      {
        title: 'Cedar Ridge Elementary',
        address: '65 N 200 W Hyde Park, UT 84318',
        image: '/images/cedarRidge.png'
      },
      {
        title: 'Cache Valley Recreation Complex',
        address: '2850 N 150 E North Logan, UT 84341',
        image: '/images/MeadowViewRSL.png'
      },
      {
        title: 'Meadow View Park',
        address: '2800 N 400 E North Logan, UT 84341',
        image: '/images/MeadowViewRSL.png'
      },
      {
        title: 'Real Salt Lake - North Logan Indoor Facility',
        address: '2800 N 230 E North Logan, UT 84341',
        image: '/images/MeadowViewRSL.png'
      },
      {
        title: 'Sky View High School',
        address: '520 S 250 E Smithfield, UT 84335',
        image: '/images/SkyView.png'
      },
    ]
  }

}
