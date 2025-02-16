import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AppTasksService } from '../app-tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = ''; 
  enteredSummary = ''; 
  enteredDate = ''; 

  private taskServices = inject(AppTasksService)
  
  onSubmit(){
    this.taskServices.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.close.emit();
  }

  onCancel(){
    this.close.emit();
  }
}
