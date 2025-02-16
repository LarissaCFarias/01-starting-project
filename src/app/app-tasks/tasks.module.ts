import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppTasksComponent } from "./app-tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [AppTasksComponent, TaskComponent, NewTaskComponent],
    exports: [AppTasksComponent],
    imports: [SharedModule, CommonModule, FormsModule]
})
export class TasksModule{

}