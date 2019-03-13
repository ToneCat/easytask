import { Component, Input } from '@angular/core';
import { TaskService } from './task.service';


@Component({
  selector: 'tasklistitem',
  template:`<ng-content></ng-content> {{title}}`,
  styles: [`h1 { font-family: Lato; color: blue; }`],
  providers: [TaskService]

})
export class TaskListItemComponent  {
public title = 'TaskListItem';
  tasklistitem;

  constructor(private taskService: TaskService) {
   
  }

 //function here

}
