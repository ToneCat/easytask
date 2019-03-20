import { Injectable } from '@angular/core';



@Injectable()
export class TaskService {






createTask(date, desc){
var tasks= [{}];
if(JSON.parse(window.localStorage.getItem("tasks")) == null){
window.localStorage.setItem("tasks", JSON.stringify(tasks));	
}
else {
	tasks = JSON.parse(window.localStorage.getItem("tasks"));
}


let isComplete: boolean = false;
var id=(tasks.length-1)+1;

var entry = {"id": id, "dateCreated": date, "description":desc, "isComplete": isComplete, "dateCompleted": "not completed"}
tasks.push(entry);
var storedTaskList = window.localStorage.setItem("tasks", JSON.stringify(tasks));

}
deleteTask(id){
	
}
updateTask(id, desc, comp){
var tasksforUpdate = JSON.parse(window.localStorage.getItem("tasks"));


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;

var yyyy = today.getFullYear();
if (dd < 10) {
  dd = 0 + dd;
} 
if (mm < 10) {
  mm = 0 + mm;
} 
var hello = mm + '/' + dd + '/' + yyyy;


for (var i = 1; i < tasksforUpdate.length; i++) {
  if (tasksforUpdate[i].id == id) {
    tasksforUpdate[i].description = desc;
     tasksforUpdate[i].isComplete = comp;
     if(tasksforUpdate[i].isComplete == 'true'){
     tasksforUpdate[i].dateCompleted = hello;
	} 
  }
}
	window.localStorage.setItem("tasks", JSON.stringify(tasksforUpdate));	

}
getTaskById(idtwo){
 var response = JSON.parse(window.localStorage.getItem("tasks"));
 const a = response.filter(response => response.id == idtwo);
 return a;
}
getAllTasks(){
var getTasks = JSON.parse(window.localStorage.getItem("tasks"));
return getTasks;
	
}

}