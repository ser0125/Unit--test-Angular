import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user: User;
  users: User[] = [];
  selectedUser: User | any = {};

  constructor(private userService: UserService) {
   
   }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      }
    )
  }
  
  selected(user: User){
    this.selectedUser = user;
  }
  getUser(userId: number){
    this.userService.getUser(userId).subscribe(
      (user: User) => {
        this.users[0] = user;
      }
    )
  }

}
