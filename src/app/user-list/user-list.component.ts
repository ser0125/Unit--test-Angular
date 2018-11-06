import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user: User;
  users: User[] = [];
  selectedUser: User;

  constructor() {
    this.users.push(new User('Jorge','jorge@gmail.com','3207896512'));
    this.users.push(new User('Diana','diana@gmail.com','3208616212'));
    this.users.push(new User('Marin','marin@gmail.com','3207893412'));

    this.selectedUser = this.users[0];
   }

  ngOnInit() {
  }
  
  selected(user: User){
    this.selectedUser = user;
  }

}
