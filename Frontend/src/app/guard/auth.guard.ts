import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from "../services/auth.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private auh:AuthService, private router:Router){}
  canActivate():boolean {
    if(!this.auh.loggedIn()){
      this.router.navigate(['/login']);
      return false;
    }else{
      return true;
    }
  }
  
}
