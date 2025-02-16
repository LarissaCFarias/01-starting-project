import { Component, input, Input } from '@angular/core';
import { AppTasksService } from './app-tasks.service'; 

@Component({
  selector: 'app-app-tasks',
  standalone: false,
  templateUrl: './app-tasks.component.html',
  styleUrl: './app-tasks.component.css'
})
export class AppTasksComponent {
  @Input({required: true}) name!:string;
  @Input({required: true}) userId!: string;
  isAddingTask = false;

  constructor(private appTasksService: AppTasksService) {}

  get selectedUserTasks(){
    return  this.appTasksService.getUserTasks(this.userId);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }
}
