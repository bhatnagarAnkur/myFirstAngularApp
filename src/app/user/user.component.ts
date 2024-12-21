import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    // user=DUMMY_USERS[0];

   // @Input() user!:any;
   @Input() userId!:string;
   @Input() username!:string;
   @Input() userphoto!:string;

   @Output() userSelected=new EventEmitter<string>();


      userImage="/users/"+this.userphoto;

      get imagepath(){
        return "/users/"+this.userphoto;
      }

      onUserSlected(){

        this.userSelected.emit(this.userId);
      }
}
