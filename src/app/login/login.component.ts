import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  template: `
  <p> MENU </p>
  <app-button></app-button>
   <h2> STUDENT LIST</h2>
   <table style="width:50%">
  <tr style="text-align: left">
    <th>ID</th>
    <th>NAME</th> 
    <th>AGE</th>
    <th>CITY</th>
  </tr>
  
  <tr *ngFor="let stu of students" style="text-align: left" >
    <td>{{stu.id}}</td>
    <td>{{stu.name}}</td>
    <td>{{stu.age}}</td>
    <td>{{stu.city}}</td>
  </tr>
  
</table>
<br>

   `,
  styles: []
})
export class LoginComponent implements OnInit {
public students=[];

  constructor( private _studentService: StudentService,private route:Router) { }

  ngOnInit() {
  this.students=this._studentService.getStudent();
  }
  
  
}
