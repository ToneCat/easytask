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
updateTask(){
	
}
getTaskById(idtwo){
	
}
getAllTasks(){
var getTasks = JSON.parse(window.localStorage.getItem("tasks"));
return getTasks;
	
}
printTask(){
var retrieveTask = window.localStorage.getItem("tasks");
var convertedbackToJSON = JSON.parse(retrieveTask);
console.log(convertedbackToJSON);

}
selectRow(row){
	console.log(row);
}
}