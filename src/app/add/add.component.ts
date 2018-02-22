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
    <button type = "submit" (click)="onClick(id)">ADD</button>
   
  `,
  styles: []
})
export class AddComponent implements OnInit {
    
id;
name='';
age;
city = '';
public students=[];
  constructor(private studentService: StudentService,private route: Router) { }

  ngOnInit() {
    this.students=this.studentService.getStudent();
  }

  onClick(idk)
  {
     let stud=
       {
       "id":this.id,
       "name":this.name,
       "age": this.age,
       "city":this.city
       }
       let i=0;
       let flag=true;
       let sid=idk;
       const stu =this.students.filter(stu=> stu.id==idk);
       console.log(stu.length);
       if(stu.length > 0)
       {
         flag=false;
         window.alert("Student ID Already Exist");
       }
      
     if(this.id!=null && this.name!='' && this.age!=null && this.city!= ' ' && flag==true)
     this.studentService.students.push(stud);
  }
  

}
