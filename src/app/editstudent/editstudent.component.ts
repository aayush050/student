import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-editstudent',
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
    <td><button type= "submit" (click)="change(stu.id)">EDIT</button></td>
  </tr>
  
</table>

<label>ID</label><input type = "number"  [(ngModel)]="id" min = "0" ><br>
<label> NAME</label> <input type = "text" [(ngModel)]="name"><br>
<label> AGE </label> <input type = "number" [(ngModel)]="age" min="4"><br>
<label> CITY</label> <input type="text" [(ngModel)]="city" ><br><br>
<button type = "submit" (click)="onClick()">ADD</button>
<br>


   `,
  styles: []
})
export class EditstudentComponent implements OnInit {
public students=[];
public id;
public city='';
public name='';
public age;
  constructor( private _studentService: StudentService,private route:Router) { }

  ngOnInit() {
  this.students=this._studentService.getStudent();
  }
  change(id)
  {
    
   let stu =this.students.filter(students=> students);
   this.id= stu[id].id;
   this.name= stu[id].name;
   this.age=stu[id].age;
   this.city=stu[id].city;
  }
  
  onClick()
  {
     let stud=
       {
       "id":this.id,
       "name":this.name,
       "age": this.age,
       "city":this.city
       }
     if(this.id!=null && this.name!='' && this.age!=null && this.city!= ' ')
     this._studentService.students.push(stud);
  }

}
