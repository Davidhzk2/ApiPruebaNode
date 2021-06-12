import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public loginData: any;
  public successMessage: String;
  public errorMessage: String;
  
  constructor() { 
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
      alert("Login");
    }
  }
  closeAlert(){
    setTimeout(() => {
      this.errorMessage ='';
      this.successMessage = '';
      this.loginData = {};
    }, 3000);
  }
  close(){
      this.errorMessage ='';
      this.successMessage = '';
  }


}
