import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-editing',
  template: `
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
ID  :<input type = "number"  [(ngModel)]="id" value="this.students.filter(students => students.id"><br>
NAME: <input type = "text" [(ngModel)]="name"><br>
AGE : <input type = "number" [(ngModel)]="age"><br>
CITY: <input type="text" [(ngModel)]="city"><br><br>
<button type = "submit" (click)="change()">ADD</button>
  `,
 styles: []
})
export class EditingComponent implements OnInit {
public students=[];

 constructor( private _studentService: StudentService,private route:Router) { }

 ngOnInit() {
 this.students=this._studentService.getStudent();
 }
 change()
 {
   
 }
}
