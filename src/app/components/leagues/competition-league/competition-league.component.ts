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
    xmlHttp.open("GET", 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSBzweT_gJxNa5ez1jfEvrCJnt6sAxToXshf8MS-Ol-8l66uUzbKeKXstyBm8ynf3DTfiDUVT9R9bl2/pub?gid=75788371&single=true&output=csv', true); // true for asynchronous 
    xmlHttp.setRequestHeader('Accept', 'application/json'); 
    xmlHttp.send(null);
  }
}
