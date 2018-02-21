import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  template: `
  <app-button></app-button>
  <h2 > ADD NEW STUDENT DETAILS</h2>
  <label>  ID</label><input type = "number"  [(ngModel)]="id" min = "0" ><br>
  <label> NAME</label> <input type = "text" [(ngModel)]="name"><br>
  <label> AGE </label> <input type = "number" [(ngModel)]="age" min="4"><br>
  <label> CITY</label> <input type="text" [(ngModel)]="city"><br><br>
    <button type = "submit" (click)="onClick()">ADD</button>
   
  `,
  styles: []
})
export class AddComponent implements OnInit {
    
id;
name='';
age;
city = '';
  constructor(private studentService: StudentService,private route: Router) { }

  ngOnInit() {
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
     this.studentService.students.push(stud);
  }
  

}
