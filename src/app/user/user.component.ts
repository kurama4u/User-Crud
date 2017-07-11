import { Component, OnInit } from '@angular/core';
import { User } from './user'
import { UserService } from './user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  users: Array<User> = [
    new User(1,"dwyane","wade","dw@email.com"),
    new User(2,"taylor","swift","ts@email.com"),
    new User(3,"justine","bieber","jb@email.com")
  ];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    // this.getUsers();
  }

  create(user: User){
    this.users.push(user);
  }
  delete(user: User){
    const i = this.users.indexOf(user);
    this.users.splice(i, 1)
  }

  getUsers(){
    // this._userService.getUsers()
    // .then(users => this.users = users)
  }
  update(users: any){
    const i = this.users.indexOf(users.original);
    this.users[i] = users.updated;
  }

}
