import { Component, Input } from '@angular/core';
import { TaskService } from './task.service';


@Component({
  selector: 'createtask',
   templateUrl: './createtask.component.html',
  styles: [`h1 { font-family: Lato; color: blue; }`],
  providers: [TaskService]

})
export class CreateTaskComponent  {
public title = 'Create Task';
  createtaskitem;

  constructor(private taskService: TaskService) {

   
  }
  //starts the task addition function and calls the createTask function from services with the user entered variables
  startTask(date, desc){
  this.taskService.createTask(date,desc);
  this.taskService.printTask();
  }






}
