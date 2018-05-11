import { Component, OnInit } from '@angular/core';
import { AddtaskService } from './addtask.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tasks to do';
  task1: Array<string>;


  constructor (private servtasks1: AddtaskService) { }

  ngOnInit () {

    this.task1 = this.servtasks1.task1;
    this.servtasks1.gettask().subscribe(function(newval){ this.task1=newval; } ); //service calling gettask function and subscribes 
 // new val means observable ki new value
  }

  
}
