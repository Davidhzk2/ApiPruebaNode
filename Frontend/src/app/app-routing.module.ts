import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./home/login/login.component";
import { RegisterComponent } from "./home/register/register.component";
import { RegisterProductComponent } from "./product/register-product/register-product.component";
import { ListProductComponent } from "./product/list-product/list-product.component";
import { UpdateProductComponent } from "./product/update-product/update-product.component";

import { AuthGuard } from "./guard/auth.guard";

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
    component:  RegisterProductComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'listProduct',
    component:  ListProductComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'updateProduct',
    component:  UpdateProductComponent,
    canActivate:[AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
