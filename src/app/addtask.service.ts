import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddtaskService {
  task:Array<string> =['do hw','eat','sleep'];
  add(addtask: string){
    console.log(addtask);
    var ad = JSON.stringify(this.task); 
    this.task.push(addtask);
  }
  delete(item1){
    var i = this.task.indexOf(item1);
    if(i != -1) {
    this.task.splice(i, 1);
    var del = JSON.stringify(this.task); 
}
  }
  
  constructor() { }
}
