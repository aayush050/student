import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  template: `
 <h1> LOGIN HERE </h1>
  <form method = "GET">
  <label>Username</label>
  <input type="text" #user  required>
<br>
   <label>Password</label>
   <input type= "password" #pass required>
   <br>
   <button (click)="goToMenu(user.value,pass.value)"  type="submit" >Login</button>
</form>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  constructor(private route: Router, private router: Router) { }
  
  ngOnInit() {
  }
  goToMenu(user,pass)
  {
     if(user==pass && user!='' && pass != '')
     {
      this.router.navigate(['/menu']);
      
     }
     else if( user=='' && pass == ''){
       window.alert("Please Fill The Username And Password");
     }
     else if( user==''){
      window.alert("Please Fill The Username");
    }
    else if(pass == ''){
      window.alert("Please Fill The Password");
    }
     
     else{
      window.alert("Invalid Credentials");
     }

  }
}

