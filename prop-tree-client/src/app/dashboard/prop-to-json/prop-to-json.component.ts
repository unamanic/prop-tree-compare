import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-prop-to-json',
  templateUrl: './prop-to-json.component.html',
  styleUrls: ['./prop-to-json.component.scss']
})
export class PropToJsonComponent implements OnInit {
  jsonString: string;
  propsString: string;

  properties = require('properties');

  constructor() { }

  ngOnInit() {
  }

  processProps(){
    try {
      this.jsonString = JSON.stringify(this.properties.parse(this.propsString, {namespaces: true}));
    } catch (error) {
      this.jsonString = error
    }
  }

  processJSON(){
    try {
      this.propsString = this.properties.stringify(this.jsonString);
    } catch (error) {
      this.propsString = error
    }

  }
}
