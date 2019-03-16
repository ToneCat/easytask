import { Injectable } from '@angular/core';



@Injectable()
export class TaskService {






createTask(date, desc){
var tasks= [{}];
tasks = JSON.parse(window.localStorage.getItem("tasks"));


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
	
}
printTask(){
var retrieveTask = window.localStorage.getItem("tasks");
var convertedbackToJSON = JSON.parse(retrieveTask);
console.log(convertedbackToJSON);

}
}