import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    user=DUMMY_USERS[0];

      userImage="/users/"+this.user.avatar;

      get imagepath(){
        return "/users/"+this.user.avatar;
      }
}
