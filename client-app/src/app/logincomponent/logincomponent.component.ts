import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {
  
  constructor(private empService:EmployeeServiceService,private router:Router) { }

  loginForm=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('')
});
  ngOnInit() {
  }
    public submitLoginForm(){
      debugger;
      let resp= this.empService.loginUser(this.loginForm.get('username').value,this.loginForm.get('password').value)
      .subscribe(data=>{
        sessionStorage.setItem("username",this.loginForm.get('username').value);
        sessionStorage.setItem("password",this.loginForm.get('password').value);
          this.router.navigate(['home']);
        
         
      });
    
     }
    }