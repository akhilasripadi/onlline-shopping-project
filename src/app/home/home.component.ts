import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { userName } from '../user.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loginName:any[]=[];
 
 //public loginName:any[]=[];

  constructor(private router: Router) { }
  loginform = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })
  
  loginForm = false;
  
  // loginname = [{
  //   username: "akhila",
  //   password: "12345"
  // }]


  loginPage() {

    console.log("hello")
    this.loginForm = true;


  }
  ngOnInit(){
    this.loginName =  userName;
    
  }

  login() {
    
    
    let loginName =  userName; 
    this.loginName.forEach(element=>{
      console.log(element.username, element.password,'element')
      const username = this.loginform.controls.username.value;
        const password = this.loginform.controls.password.value;
      if(username == element.username && password == element.password){
        this.router.navigate(['/login'])
      } else {
  
      }
    })
    
  

  }
  cancel() {
    console.log("hello cANCEL")
    this.loginForm = false;

  }






}



