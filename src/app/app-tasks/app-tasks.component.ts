import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-tasks',
  imports: [],
  templateUrl: './app-tasks.component.html',
  styleUrl: './app-tasks.component.css'
})
export class AppTasksComponent {
  @Input({required: true}) name!:string;
}
