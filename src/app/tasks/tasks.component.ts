import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() taskip;
  @Output() evemm: EventEmitter<string> = new EventEmitter();
  addtask: string;
  add(addtask: string){
    console.log(addtask);
    this.taskip.push(addtask);
    this.evemm.emit(this.taskip);
    var ad = JSON.stringify(this.taskip); 
  }
  
  constructor(  ) { }
    
  ngOnInit() {
    
  }

}
