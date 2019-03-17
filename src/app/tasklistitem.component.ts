import { Component, Input } from '@angular/core';
import { TaskService } from './task.service';



@Component({
  selector: 'tasklistitem',
  templateUrl: './tasklistitem.component.html',
  styles: [`h1 { font-family: Lato; color: blue; }`],
  providers: [TaskService]

})
export class TaskListItemComponent  {
dataSource;


  @Input() task;


  displayedColumns: string[] = ['id','dateCreated', 'description', 'isComplete', 'dateCompleted', 'edit', 'delete'];
  

  constructor(private taskService: TaskService) {
     
  }
  ngOnInit(){
  var x = document.getElementById('warning');
  this.dataSource = this.task.slice(1);

  if(this.dataSource === null){
  
  x.style.visibility = "visible";
  }
  else{
   x.remove();

  }
  }
  selectRow(row){
	console.log(row);
}



}
