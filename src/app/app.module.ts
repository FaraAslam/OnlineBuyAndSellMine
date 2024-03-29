import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdminGuard} from '../app/services/auth-gaard.guard'
import { UserService } from './services/user/user.service';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { SignUpComponent } from './core/auth/sign-up/sign-up.component';
import { ResetPasswordComponent } from './core/auth/reset-password/reset-password.component';
import { VisitorsComponent } from './core/visitors/visitors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderNavbarComponent } from './core/header-navbar/header-navbar.component';
import { MenuNavbarComponent } from './core/menu-navbar/menu-navbar.component';
import { SubCategoriesComponent } from './core/dashboard/sub-categories/sub-categories.component';
import { CityComponent } from './core/dashboard/city/city.component';
import { ProvinceComponent } from './core/dashboard/province/province.component';
import { SellerProfileComponent } from './core/visitors/seller-profile/seller-profile.component';
import { UserModule } from './core/user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignUpComponent,
    ResetPasswordComponent,
    VisitorsComponent,
    LoginComponent,
    FooterComponent,
    HeaderNavbarComponent,
    MenuNavbarComponent,
    SubCategoriesComponent,
    ProvinceComponent,
    CityComponent,
    SellerProfileComponent, 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
    MatIconModule, 
   UserModule
  ],
  providers: [AdminGuard, UserService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
