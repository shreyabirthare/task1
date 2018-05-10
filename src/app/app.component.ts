import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tasks to do';
  task1:Array<string> =['do hw','eat','sleep'];

  newlist(task3) {
    this.task1 = task3;
    console.log(this.task1);
  }
  delete(item1){
    var i = this.task1.indexOf(item1);
    if(i != -1) {
    this.task1.splice(i, 1);
    var del = JSON.stringify(this.task1); 
    }
  }
  constructor () {

  }

  ngOnInit () {
  }

  
}
