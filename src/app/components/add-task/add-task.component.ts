import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Task} from '../../Task'
import {UiService} from '../../services/ui.service'
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onSubmitTask:EventEmitter<Task>=new EventEmitter()
  text:string;
  day:string;
  reminder:boolean=false;
  showAddForm:boolean;
  subscription:Subscription;
  constructor(private uiService:UiService) { 
    this.text=""
    this.day=""
    this.reminder=false
    this.showAddForm=false
    this.subscription=this.uiService.onToggle().subscribe(value=>this.showAddForm=value)
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    if(!this.text){
      alert("Please add a task");
      return;
    }
    const newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }
    this.onSubmitTask.emit(newTask)
    this.text=""
    this.day=""
    this.reminder=false
  }

  

}
