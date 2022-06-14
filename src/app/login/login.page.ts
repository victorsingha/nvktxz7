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

  login(event:any){
    console.log(event)
    // this.route.navigate(['/dashboard']);
  }

  openCreateAccount(){
    this.pageType = "Register"
  }
  openLogin(){
    this.pageType = "Login"
  }
}
