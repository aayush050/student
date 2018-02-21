import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-stulist',
  template: `
  <app-login></app-login>
  
  `,
  styles: []
})
export class StulistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
