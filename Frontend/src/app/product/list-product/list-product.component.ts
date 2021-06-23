import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  productData: any;
  successMessage: String;
  errorMessage: String;

  constructor(private product: ProductsService, private router: Router) { 
    this.productData = {};
    this.successMessage ='';
    this.errorMessage = '';
  }

  ngOnInit(): void {
    this.product.listTask().subscribe(
      (res)=>{
        console.log(res);    
      },
      (err)=>{
        console.log(err.error);
        this.errorMessage = err.error;
        this.closeAlert();
      }
    )
  }

  updateProdcut(){}

  closeAlert(){
    setTimeout(() => {
      
    }, 2000);
  }
  closeX(){
    
  }

}
