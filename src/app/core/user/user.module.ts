import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserProductsComponent } from './user-products/user-products.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { UserComponent } from './user.component';



@NgModule({
  declarations: [
    UserProductsComponent,
    UserProfileComponent,
    EditProductComponent,
    UserComponent,
   

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
