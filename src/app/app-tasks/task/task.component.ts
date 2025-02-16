import { Component, Input, inject } from '@angular/core';
import { Task } from './task.model'
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { AppTasksService } from '../app-tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({required: true}) task!: Task;
  private taskServices = inject(AppTasksService);
  
  onCompleteTask() {
    this.taskServices.removeTask(this.task.id);
  }
}

