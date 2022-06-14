import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public pageType = "Login"

  public email="";
  public password="";

  public newEmail="";
  public newPassword="";
  public confirmPassword="";

  constructor(private route:Router) { }

  ngOnInit() {
  }

  login(loginForm:any){
    if(loginForm.form.status == "INVALID"){
      console.log("Invalid")
    }else{
      this.route.navigate(['/dashboard']);
    }
    console.log(loginForm)
  }

  openCreateAccount(){
    this.newPassword = "";
    this.confirmPassword = "";
    this.pageType = "Register"
  }
  openLogin(){
    this.password = "";
    this.pageType = "Login"
  }
}
