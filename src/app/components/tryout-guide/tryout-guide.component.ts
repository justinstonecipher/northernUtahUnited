import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tryout-guide',
  templateUrl: './tryout-guide.component.html',
  styleUrls: ['./tryout-guide.component.less']
})
export class TryoutGuideComponent implements OnInit {
  teamType = '';
  teamTypeDescription = '';
  sterlingDescriptionId: number;
  teamList: any[] = [];
  xLeagueYearList = ['2011 (U9)', '2010 (U10)', '2009 (U11)'];
  boysSterlingYearList = ['2011 (U9)', '2009 (U11)', '2008 (U12)', '2007 (U13)','2005 (U15)', '2004 (U16)'];
  girlsSterlingYearList = ['2009 (U11)', '2005 (U15)', '2004 (U16)', '2003 (U17)'];
  yearList = ['2013 (U7)', '2012 (U8)', '2011 (U9)', '2010 (U10)', '2009 (U11)', '2008 (U12)', '2007 (U13)', '2006 (U14)', '2005 (U15)', '2004 (U16)', '2003 (U17)', '2002 (U18)', '2001 (U19)'];
  royaltyBoysYearList = ['2010 (U10)', '2009 (U11)', '2008 (U12)', '2007 (U13)', '2006 (U14)', '2005 (U15)'];
  royaltyGirlsYearList = ['2007 (U13)', '2006 (U14)', '2004 (U16)', '2003 (U17)'];
  tryoutFormResponses: any[] = [];
  constructor() { }

  ngOnInit() {
    this.tryoutGuidGoogleApiCall(response => {
      this.teamList = response;
    });

    this.tryoutFormGoogleApiCall(response => {
      this.tryoutFormResponses = response;
    })
  }

  setModalInfo(type: string, description: number) {
    this.teamType = type;
    this.sterlingDescriptionId = description;
  }

  tryoutGuidGoogleApiCall(callback) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        let response = xmlHttp.responseText;
        let lines = response.split("\r\n");
        let result = [];
        let headers = lines[0].replace(/[?=:()]/g, '').replace(/ /g, '').split(",");

        for (let i = 1; i < lines.length; i++) {
          let obj = {};
          let currentline = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

          for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
          }
          result.push(obj);
        }
        //return result; //JavaScript object
        callback(result);

      }
    }
    xmlHttp.open("GET", 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQJeZVKPye905nWe96HM0QwWLqySMfqFaARUrjZ7QmNSOTxPcNKe93MA2C1wmGA8vvK1xoAkTBVC_ZM/pub?gid=960294738&single=true&output=csv', true);
    xmlHttp.setRequestHeader('Accept', 'application/json');
    xmlHttp.send(null);
  }

  tryoutFormGoogleApiCall(callback) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        let response = xmlHttp.responseText;
        let lines = response.split("\r\n");
        let result = [];
        let headers = lines[0].replace(/[?=:()]/g, '').replace(/ /g, '').split(",");

        for (let i = 1; i < lines.length; i++) {
          let obj = {};
          let currentline = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

          for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
          }
          result.push(obj);
        }
        //return result; //JavaScript object
        callback(result);
      }
    }
    xmlHttp.open("GET", 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRVOpK8ZGhO6WPEjLDUeaEEu-yWqXqmWE4o6VRYg7QvqAOoAisqc9cTAbpH_KfkxTO1NMyYcVQUIJNO/pub?gid=1930689121&single=true&output=csv', true);
    xmlHttp.setRequestHeader('Accept', 'application/json');
    xmlHttp.send(null);
  }

  scrollToIndependent() {
    var element = document.getElementById('independent');
    element.scrollIntoView();
    this.accountForFixedNav();
  }

  scrollToChallenger() {
    var element = document.getElementById('challenger');
    element.scrollIntoView();
    this.accountForFixedNav();
  }

  scrollToXLeague() {
    var element = document.getElementById('xleague');
    element.scrollIntoView();
    this.accountForFixedNav();
  }

  scrollToState() {
    var element = document.getElementById('state');
    element.scrollIntoView();
    this.accountForFixedNav();
  }

  scrollToSterling() {
    var element = document.getElementById('sterling');
    element.scrollIntoView();
    this.accountForFixedNav();
  }

  scrollToRoyal() {
    var element = document.getElementById('royal');
    element.scrollIntoView();
    this.accountForFixedNav();
  }

  scrollToTryoutInfo() {
    var element = document.getElementById('tryoutInfo');
    element.scrollIntoView();
    this.accountForFixedNav();
  }

  accountForFixedNav() {
    var yourHeight = 80;
    var scrolledY = window.scrollY;

    if (scrolledY) {
      window.scroll(0, scrolledY - yourHeight);
    }
  }
}
