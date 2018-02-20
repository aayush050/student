import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-add',
  template: `
  <app-button></app-button>
  <h2> ADD NEW STUDENT DETAILS</h2>
    ID  :<input type = "text" [(ngModel)]="id" ><br>
    NAME: <input type = "text" [(ngModel)]="name"><br>
    AGE : <input type = "text" [(ngModel)]="age"><br>
    CITY: <input type="text" [(ngModel)]="city"><br>
    <button type = "submit" (click)="onClick()">SUBMIT</button>
    
  `,
  styles: []
})
export class AddComponent implements OnInit {
    
id;
name='';
age;
city = '';
  constructor(private studentService: StudentService) { }

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
     
     this.studentService.students.push(stud);
  }
}
