import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  template: `
 <h1> LOGIN HERE </h1>
  <form method = "GET">
  Username:  <input type="text" #user  required>
<br>
   Password : <input type= "password" #pass required>
   <br>
   <button (click)="onClick(user.value,pass.value)"  type="submit" >Login</button>
</form>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  constructor(private route: Router, private router: Router) { }
  
  ngOnInit() {
  }
  onClick(user,pass)
  {
     if(user==pass)
     {
      this.router.navigate(['/login']);
      
     }
  }
}

