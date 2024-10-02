import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  loginobj : any = {
    username:'',
    Password:''

  }

  constructor(private router:Router){}

  ngOnInit(){}

  login(){
      console.log(this.loginobj.username);
      if( this.loginobj.username == "admin" && this.loginobj.password == '1234'){
          this.router.navigateByUrl('dashboard');
      } else {
        alert('user not found');
      }
  }

}
