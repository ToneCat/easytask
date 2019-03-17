import { Component, Input } from '@angular/core';
import { TaskService } from './task.service';


@Component({
  selector: 'taskdetails',
templateUrl: './taskdetails.component.html',
  styles: [`h1 { font-family: Lato; color: blue; }`],
  providers: [TaskService]

})
export class TaskDetailsComponent  {
public title = 'Task Details';
  taskdetails;

  constructor(private taskService: TaskService) {
   
  }



}
