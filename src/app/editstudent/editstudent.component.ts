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
<div *ngIf="flag">
<label>ID</label><input type = "number"  [(ngModel)]="editstudent.id" min = "0" readonly><br>
<label> NAME</label> <input type = "text" [(ngModel)]="editstudent.name"><br>
<label> AGE </label> <input type = "number" [(ngModel)]="editstudent.age" min="4"><br>
<label> CITY</label> <input type="text" [(ngModel)]="editstudent.city" ><br><br>
<button type = "submit" (click)="onClick(editstudent)">SAVE</button>
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
public editstudent;
public need;
  constructor( private _studentService: StudentService,private route:Router) { }

  ngOnInit() {
  this.students=this._studentService.getStudent();
  }
  change(id)
  {
   this.need=id;
   this.flag=true;
   const stu =this.students.filter(stu=> stu.id==id)[0];
   this.editstudent=JSON.parse(JSON.stringify(stu));
  }
  
  onClick(editstudent)
  {
    if(editstudent.id!=null && editstudent.name!='' && editstudent.age!=null && editstudent.city!= ' '){
      this.students.forEach((student)=>{
        if(student.id === editstudent.id){
          student.name = editstudent.name;
          student.age = editstudent.age;
          student.city = editstudent.city;
        }
      });
    }
    
  }

}
