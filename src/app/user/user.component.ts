import { Component,Input, input, computed, Output, EventEmitter} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})

export class UserComponent {
  // @Input({required: true}) avatar!:string; 
  // @Input({required: true}) name!:string; 
  // @Input({required: true}) id!:string; 
  @Input({required: true}) user!: User;

  @Input({required:true}) selected!: boolean;

  @Output() selectId = new EventEmitter<string>();


  get imagePath(){
     return 'users/' + this.user.avatar;
  }
  onSelectUser(){
    this.selectId.emit(this.user.id);
  }
}
