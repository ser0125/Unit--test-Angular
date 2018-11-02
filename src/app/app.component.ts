import { Component, OnInit } from '@angular/core';
import { Calculator } from './calculator';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'unit-test';
  person:Person;
  constructor(){
    this.person = new Person('Carlos','ROdriguez',20,75,1.70);
  }
}
