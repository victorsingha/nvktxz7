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


  public showError = false;
  public showLoading = false;
  public errorMessage = "";
  public pageType = "Login"


  public email = "";
  public password = "";

  public newEmail = "";
  public newPassword = "";
  public confirmPassword = "";

  constructor(private route: Router, private links: Links, private API: ApiService) { }

  ngOnInit() {
  }


  async login(loginForm: any) {
    // console.log(this.links.baseURL)

    if (loginForm.form.status == "INVALID") {
      console.log("Invalid")
    } else {
      let req = {
        email: this.email,
        password: this.password
      }
      this.showLoading = true;
      let res = await this.API.POST(this.links.baseURL+"/api/user/login", req)
      this.showLoading = false;
      if(res[0].StatusCode == "F"){
        this.showError = true;
        this.errorMessage = res[0].StatusMessage;
        return;
      }
      if(res[1].StatusCode=="S"){
        // this.route.navigate(['/dashboard']);
      }else{
        this.showError = true;
        this.errorMessage = res[1].StatusMessage;
      }
    }

  }

  openCreateAccount() {
    this.newPassword = "";
    this.confirmPassword = "";
    this.pageType = "Register"
  }
  openLogin() {
    this.password = "";
    this.pageType = "Login"
  }

  forgotPassword() {
    //Coming Soon
  }
}
