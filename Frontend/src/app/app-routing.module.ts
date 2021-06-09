import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./home/login/login.component";
import { RegisterComponent } from "./home/register/register.component";
import { RegisterProductComponent } from "./product/register-product/register-product.component";
import { ListProductComponent } from "./product/list-product/list-product.component";
import { UpdateProductComponent } from "./product/update-product/update-product.component";

const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent,
  },
  { 
    path:'register',
    component: RegisterComponent,
  },
  {
    path: 'registerProduct',
    component:  RegisterProductComponent
  },
  {
    path: 'listProduct',
    component:  ListProductComponent
  },
  {
    path: 'updateProduct',
    component:  UpdateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
