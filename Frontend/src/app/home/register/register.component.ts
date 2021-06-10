import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerData : any;
  public successMessage: String;
  public errorMessage: String;

  constructor(private auth:AuthService, private router: Router) { 
    this.registerData = {};
    this.successMessage = '';
    this.errorMessage = '';
  }

  ngOnInit(): void {
  }

  registerUser(){
    if(!this.registerData.name || !this.registerData.username || !this.registerData.password){
        this.errorMessage = "Failed : data incomplete!";
        this.closeAlert();
        this.registerData = {}
    }else{
      this.auth.registerUser(this.registerData).subscribe(
        (res) =>{
          console.log(res);
          this.successMessage = 'Successfuly: Register user';
          this.closeAlert();
          this.registerData = {}
        }, 
        (err) =>{
          console.log(err);
          this.errorMessage = err.error;
          this.closeAlert();
          this.registerData = {}
        }
      );
    }
  };

  closeAlert(){
    setTimeout(() => {
      this.successMessage ='';
      this.errorMessage = '';
    }, 3000);
  }
  close(){
      this.successMessage ='';
      this.errorMessage = '';
  }

}
