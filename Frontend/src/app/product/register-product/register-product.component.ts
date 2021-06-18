import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {
  public productData : any;
  public errorMessage: String;

  constructor(private product: ProductsService, private router: Router) {
    this.productData = {};
    this.errorMessage = '';
   }

  ngOnInit(): void {
  }

  saveProduct(){
    if(!this.productData.name  || !this.productData.description || !this.productData.category || !this.productData.value){
      this.errorMessage = 'Process Failed: Incomplete data';
      this.productData ={};
      this.closeAlert();
    } else{
        this.product.registerProduct(this.productData).subscribe(
          (res:any)=>{
            console.log(res);
            this.router.navigate(['/listProduct']);
          },
          (err)=>{
            console.log(err);
            this.errorMessage = err.error;
            this.closeAlert();
            this.productData = '';
          }
        );
    }
  }
  closeAlert(){
    setTimeout(() => {
      this.errorMessage = '';
    }, 3500);
  }

  close(){
      this.errorMessage = '';
  }

}
