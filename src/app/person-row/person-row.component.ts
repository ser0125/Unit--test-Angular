import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-person-row',
  templateUrl: './person-row.component.html',
  styleUrls: ['./person-row.component.css']
})
export class PersonRowComponent implements OnInit {
  @Input() user: User;
  email: string;

  constructor() { }

  ngOnInit() {
  }
  showEmailfunction(){
    this.email = this.user.email;
  }

}
