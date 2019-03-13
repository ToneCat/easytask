import { Component, Input } from '@angular/core';
import { TaskService } from './task.service';


@Component({
  selector: 'tasklist',
  template:`<ng-content></ng-content> {{title}}`,
  styles: [`h1 { font-family: Lato; color: blue; }`],
  providers: [TaskService]

})
export class TaskListComponent  {
public title = 'TaskList';
  tasklist;

  constructor(private taskService: TaskService) {
   
  }

 //function here

}
