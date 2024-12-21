import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent,TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myFirstAngularApp';
  users=DUMMY_USERS;

  onSelected(userId:string)
  {
    console.log("Selected the user with id: "+userId);
  }
}
