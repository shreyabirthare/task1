import { Component, OnInit } from '@angular/core';
import { AddtaskService } from '../addtask.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  addtask: string;
  constructor( private servtasks: AddtaskService ) { }
  task1= [];

  gettask(): void {
    this.task1= this.servtasks.task;
 
  }
  

  ngOnInit() {
    this.gettask();
  }

}
