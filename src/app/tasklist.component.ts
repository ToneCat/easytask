import { Component, Input } from '@angular/core';
import { TaskService } from './task.service';
import { TaskListItemComponent } from './tasklistitem.component';


@Component({
  selector: 'tasklist',
  templateUrl: './tasklist.component.html',
  styles: [`h1 { font-family: Lato; color: blue; }`],
  providers: [TaskService]

})
export class TaskListComponent  {
  tasklist;


  constructor(private taskService: TaskService) {

   
  }

ngOnInit(){
  var x = document.getElementById('newTask');
  x.style.visibility = "visible";
  var getAllTasks = this.taskService.getAllTasks();
  this.tasklist = getAllTasks;
    document.getElementById("viewTasks").style.visibility = "hidden";	
   



  

}

}
