import { Component, Input } from '@angular/core';
import { TaskService } from './task.service';
import { ActivatedRoute } from "@angular/router";



@Component({
  selector: 'taskdetails',
templateUrl: './taskdetails.component.html',
  styles: [`h1 { font-family: Lato; color: blue; }`],
  providers: [TaskService]

})
export class TaskDetailsComponent  {
public title = 'Task Details';
  id: string;
  id2: string; //display ID for html seperate from parameter id
  date: string;
  desc: string;
  complete: boolean;
  datecomp: string;


  constructor(private taskService: TaskService, private route: ActivatedRoute) {
   
  }
 
// various HTML manipulations for UI
  ngOnInit(){
 this.id = this.route.snapshot.paramMap.get("id");
 var getTask = this.taskService.getTaskById(this.id);
  this.id2 = getTask[0].id;
  this.date = getTask[0].dateCreated;
    this.desc = getTask[0].description;
    this.complete = getTask[0].isComplete;
    this.datecomp = getTask[0].dateCompleted;
     document.getElementById("newTask").style.visibility = "hidden";	
    document.getElementById("viewTasks").style.visibility = "visible";	
document.getElementById("viewTasks").innerHTML = 'Go Back';

 

  }
  // more HTMl manipulations for UI purposes
  startUpdate()
  {

  document.getElementById("desctext").removeAttribute('disabled');
  document.getElementById("comptext").removeAttribute('disabled');
  document.getElementById("edittask").style.visibility = "hidden";	
  document.getElementById("submitupdate").style.visibility = "visible";
  document.getElementById("canceltask").style.visibility = "visible";	
  
  }
 

/**
*calls instance of taskService with parameters: ID, matches ID, then updates description, isComplete
* and date of completion using the current date to update task.
* @param {string} id -The task id number.
* @param {string} desc -The task description.
*@param {boolean} comp  - task complete boolean value.
*/
  nextStepUpdate(id,desc,comp){
  this.taskService.updateTask(id, desc, comp);

  }
  // cancels update UI changes
  cancelUpdate(){
  
  (document.getElementById("desctext")as HTMLInputElement).disabled = true;
  (document.getElementById("comptext")as HTMLInputElement).disabled = true;
  
  document.getElementById("edittask").style.visibility = "visible";	
  document.getElementById("canceltask").style.visibility = "hidden";	
  document.getElementById("submitupdate").style.visibility = "hidden";
  }



}
