import { Component,Input, input, computed, Output, EventEmitter} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users'

type User = {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) avatar!:string; 
  // @Input({required: true}) name!:string; 
  // @Input({required: true}) id!:string; 
  @Input({required: true}) user!: User;

  @Output() selectId = new EventEmitter<string>();


  get imagePath(){
     return 'users/' + this.user.avatar;
  }
  onSelectUser(){
    this.selectId.emit(this.user.id);
  }
}
