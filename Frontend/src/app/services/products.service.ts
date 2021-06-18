import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public env:String;

  constructor(private http: HttpClient) {
    this.env = environment.APP_URL;
   }

  registerProduct(product:any){
    return this.http.post(this.env + "products/registerProduct/", product);
  } 
}
