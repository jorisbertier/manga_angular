import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  
  user: any;

  constructor(private UserService: UserService, private route: ActivatedRoute) {
  }

  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
    /*   const userId = +params['id'];
      console.log('UserID:', userId);
      this.getUserById(userId -1) ; */
      this.UserService.fetchById(params['id']).subscribe(data =>{
      this.user = data;
        
      })
    })
  }

  getUserById(id:number) {
    this.user = this.UserService.fetchById(id);
  }

}
