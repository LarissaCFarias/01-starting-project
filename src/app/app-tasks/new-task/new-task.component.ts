import { Component, EventEmitter, inject, Inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { AppTasksService } from '../app-tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
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
