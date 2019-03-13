import { Component, Input } from '@angular/core';
import { TaskService } from './task.service';


@Component({
  selector: 'taskdetails',
  template:`<ng-content></ng-content> {{title}}`,
  styles: [`h1 { font-family: Lato; color: blue; }`],
  providers: [TaskService]

})
export class TaskDetailsComponent  {
public title = 'Task Details';
  taskdetailsitem;

  constructor(private taskService: TaskService) {
   
  }

 //function here

}
