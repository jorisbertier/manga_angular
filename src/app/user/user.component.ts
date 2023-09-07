import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Iuser } from './Iuser';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users: Iuser[] = [];
  userParent:Iuser | undefined;


  constructor(private service:UserService) {

  }

  ngOnInit() {
    this.getUser();
    console.log(this.getId(1));
  }

  getUser() {
    this.service.fetchAll().subscribe (data => {
      this.users = data;
      console.log(data);
      
    });
  }

  getId(id: number) {
    this.service.fetchById(id).subscribe (data => {
      console.log(data);   
    });
  }

  selectUser(user: Iuser) {
    console.log('ca marche');
    this.userParent = user;
  }
}
