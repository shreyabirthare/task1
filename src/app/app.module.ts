import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddtaskService } from './addtask.service';
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ AddtaskService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
