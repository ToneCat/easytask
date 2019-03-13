import { Component, Input } from '@angular/core';
import { TaskService } from './task.service';


@Component({
  selector: 'createtask',
  template:`<ng-content></ng-content> {{title}}`,
  styles: [`h1 { font-family: Lato; color: blue; }`],
  providers: [TaskService]

})
export class CreateTaskComponent  {
public title = 'Create Task';
  createtaskitem;

  constructor(private taskService: TaskService) {
   
  }

 //function here

}
