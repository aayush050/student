import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-stulist',
  template: `
  <app-button></app-button>
  <app-login></app-login>
  <p> stulist works</p>
  `,
  styles: []
})
export class StulistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
