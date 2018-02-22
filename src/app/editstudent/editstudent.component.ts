import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-editstudent',
  template: `
   
   <app-button></app-button>
   <h2> STUDENT LIST</h2>
   <table style="width:70%">
  <tr style="text-align: left">
    <th>ID</th>
    <th>NAME</th> 
    <th>AGE</th>
    <th>CITY</th>
    <th>CLICK TO EDIT</th>
  </tr>
  
  <tr *ngFor="let stu of students" style="text-align: left" >
    <td>{{stu.id}}</td>
    <td>{{stu.name}}</td>
    <td>{{stu.age}}</td>
    <td>{{stu.city}}</td>
    <td><button type= "submit" (click)="change(stu.id)">EDIT</button></td>
  </tr>
  
</table>
<br><br>
<div *ngIf="flag">
<label>ID</label><input type = "number"  [(ngModel)]="stu[0].id" min = "0" ><br>
<label> NAME</label> <input type = "text" [(ngModel)]="stu[0].name"><br>
<label> AGE </label> <input type = "number" [(ngModel)]="stu[0].age" min="4"><br>
<label> CITY</label> <input type="text" [(ngModel)]="stu[0].city" ><br><br>
<button type = "submit" (click)="onClick()">DONE</button>
<br>
</div>

   `,
  styles: []
})
export class EditstudentComponent implements OnInit {
public students=[];
public id;
public city='';
public name='';
public age;
public flag=false;
public stu;
  constructor( private _studentService: StudentService,private route:Router) { }

  ngOnInit() {
  this.students=this._studentService.getStudent();
  }
  change(id)
  {
    this.flag=true;
    this.stu =this._studentService.getStudent().filter(student=> student.id==id);
   
  }
  
 

}
