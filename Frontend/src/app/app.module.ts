import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from "./home/login/login.component";
import { HeaderComponent } from './home/header/header.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { RegisterProductComponent } from './product/register-product/register-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { RegisterRoleComponent } from './admin/register-role/register-role.component';
import { RegisterComponent } from './home/register/register.component';

import { AuthService } from "./services/auth.service";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { ProductsService } from "./services/products.service";

import { AuthGuard } from "./guard/auth.guard";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ListProductComponent,
    RegisterProductComponent,
    UpdateProductComponent,
    ListRoleComponent,
    RegisterRoleComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, ProductsService, AuthGuard, TokenInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
