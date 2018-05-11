import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddtaskService {
  task1:Array<string> =['do hw','eat','sleep'];
  add(addtask: string){
    console.log(addtask);
    this.task1.push(addtask);
    var ad = JSON.stringify(this.task1);
  }
  delete(item1){
    var i = this.task1.indexOf(item1);
    if(i != -1) {
    this.task1.splice(i, 1);
    var del = JSON.stringify(this.task1); 
    }
  }
  gettask(): Observable<string[]> {
    return of(this.task1);
 
}
  constructor() { }
}
