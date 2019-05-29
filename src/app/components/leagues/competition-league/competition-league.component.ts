import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competition-league',
  templateUrl: './competition-league.component.html',
  styleUrls: ['./competition-league.component.less']
})
export class CompetitionLeagueComponent implements OnInit {
  googleFormResponses: any[] = [];

  constructor() { }

  ngOnInit() {
    this.googleApiCall(response => {
      this.googleFormResponses = response;
    });
  }

  googleApiCall(callback) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        let response = xmlHttp.responseText;
        let lines = response.split("\r\n");
        let result = [];
        let headers = lines[0].replace(/[?=:()]/g,'').replace(/ /g, '').split(",");
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
    xmlHttp.open("GET", 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRVOpK8ZGhO6WPEjLDUeaEEu-yWqXqmWE4o6VRYg7QvqAOoAisqc9cTAbpH_KfkxTO1NMyYcVQUIJNO/pub?gid=1930689121&single=true&output=csv', true); // true for asynchronous 
    xmlHttp.setRequestHeader('Accept', 'application/json'); 
    xmlHttp.send(null);
  }
}
