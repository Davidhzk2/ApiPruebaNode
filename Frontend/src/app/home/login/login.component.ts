import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public loginData: any;
  public successMessage: String;
  public errorMessage: String;
  
  constructor(private auth: AuthService, private router: Router) { 
    this.loginData ={};
    this.successMessage= '';
    this.errorMessage='';
  }
  
  ngOnInit(): void {
  }
  login(){
    if(!this.loginData.username || !this.loginData.password){
      this.errorMessage = 'Error: Incomplete Data.';
      this.loginData ={};
      this.closeAlert();
    }else{
      console.log(this.loginData);
      this.auth.login(this.loginData).subscribe(
        (res: any)=>{
          console.log(res);
          localStorage.setItem("token", res.jwtToken);
          this.router.navigate(['/listProduct']);
        },
        (err)=>{
          console.log(err);
          this.errorMessage = err.error;
          this.closeAlert();
          this.loginData = {};
        }
      );
    }
  }
  closeAlert(){
    setTimeout(() => {
      this.errorMessage ='';
      this.successMessage = '';
      this.loginData = {};
    }, 3500);
  }
  close(){
      this.errorMessage ='';
      this.successMessage = '';
  }


}
