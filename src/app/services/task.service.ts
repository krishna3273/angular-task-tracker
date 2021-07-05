import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {TASKS} from '../mock-tasks'
import {Task} from '../Task'
import {Observable} from 'rxjs'
const httpHeaders={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiUrl="http://localhost:5000/tasks"
  constructor(private http:HttpClient) { }
  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
  deleteTasks(task:Task): Observable<Task>{
    const url=`${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }
  updateTask(task:Task): Observable<Task>{
    const url=`${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url,task,httpHeaders)
  }
  addTask(task:Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task,httpHeaders)
  }
}
