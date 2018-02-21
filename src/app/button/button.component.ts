import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-button',
  template: `
  <button (click)="goToStudentList()">STUDENT LIST</button>
  <button (click)="goToAddStudent()" >ADD STUDENT</button>
  <button (click)= "goToEditStudentList()" >EDIT STUDENT </button>
  <button type="submit" (click)="logout()">LOGOUT</button>
<br>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToAddStudent()
{
  this.route.navigate(['/add']);
}
goToStudentList()
{
  this.route.navigate(['/studentlist']);
}
goToEditStudentList()
{
  this.route.navigate(['/edit']);
}
logout()
{
this.route.navigate(['/login']);
}
}
