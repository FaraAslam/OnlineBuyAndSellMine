import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  declarations: [
    UserComponent,
    UserProductsComponent,
    UserProfileComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
