import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/apiService';
import { Links } from 'src/services/Links';

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

  constructor(private route:Router,private links:Links,private API:ApiService) { }

  ngOnInit() {
  }
  

  async login(loginForm:any){
    // console.log(this.links.baseURL)

    // if(loginForm.form.status == "INVALID"){
    //   console.log("Invalid")
    // }else{
    //   this.route.navigate(['/dashboard']);
    // }
    // console.log(loginForm)

    console.log(this.email)
    console.log(this.password)
    let req = {
      email:this.email,
      password:this.password
    }
    let res = await this.API.POST("http://localhost:3000/api/user/login",req)
    console.log(res)
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

  forgotPassword(){
    //Coming Soon
  }
}
