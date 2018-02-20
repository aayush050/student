import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-button',
  template: `
  <button (click)="onClicka()">STUDENT LIST</button>
  <button (click)="onClick()" >ADD STUDENT</button>
  <button >EDIT STUDENT </button>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onClick()
{
  this.route.navigate(['/add']);
}
onClicka()
{
  this.route.navigate(['/stulist']);
}
}
